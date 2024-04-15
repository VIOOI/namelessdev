import {
  ReadonlyArray as A,
  Effect as E,
  Option as O,
  ReadonlyRecord as R,
  Ref,
  pipe,
} from "effect";
import { ReactNode, cloneElement, isValidElement } from "react";
import { Setting } from "./settings";
import { Matching, MatchingLive } from "./matching";

export class Stored<const N extends string> {
  append: (children: ReactNode) => E.Effect<void, never, Matching>;
  filtered: (setting: Setting<N>) => E.Effect<void>;
  overwrite: (setting: Setting<N>) => E.Effect<void>;
  get: E.Effect<Record<N | "default", Array<ReactNode>>>;
  assignWith: (
    modifier: Record<string, (a: any) => any>,
    source: Record<string, unknown>,
  ) => Record<string, unknown>;

  constructor(private value: Ref.Ref<Record<N | "default", Array<ReactNode>>>) {
    this.assignWith = (modifier, source) => {
      return pipe(
        modifier,
        R.toEntries,
        A.reduce(source, (acc, [key, fn]) => {
          if (R.has(acc, key)) return pipe(acc, R.modify(key, fn));
          return pipe(acc, R.set(key, fn(null)));
        }),
      );
    };

    this.append = (children: ReactNode) =>
      Ref.update(this.value, (record) =>
        E.gen(function* (_) {
          const [key, value] = yield* _(
            Matching,
            E.flatMap((matching) => matching.get(children)),
          );

          return R.get(record, key as N).pipe(
            O.match({
              onNone: () => pipe(record, R.set(key, A.of(value))),
              onSome: () =>
                pipe(
                  record,
                  R.modify(key as N, (arr) => A.append(arr, value)),
                ),
            }),
          );
        }).pipe(E.provide(MatchingLive), E.runSync),
      );

    this.filtered = ({ name, filter }) =>
      Ref.update(
        this.value,
        R.modify(name, (node) => {
          return A.filter(node.at(0) as ReactNode[], filter);
        }),
      );

    this.overwrite = ({ name, overwrite }) =>
      Ref.update(
        this.value,
        R.modify(
          name,
          A.map((children) => {
            if (!isValidElement(children)) return children;
            return cloneElement(
              children,
              this.assignWith(overwrite, children.props),
              children.props.children,
            );
          }),
        ),
      );

    this.get = Ref.get(this.value);
  }
}

export const createStored = <const N extends string>() =>
  E.map(
    Ref.make({} as Record<N | "default", Array<ReactNode>>),
    (value) => new Stored(value),
  );
