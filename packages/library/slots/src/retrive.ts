import {
  ReadonlyArray as A,
  Effect as E,
  ReadonlyRecord as R,
  pipe,
} from "effect";
import React, { type ReactNode } from "react";
import { MatchingLive } from "./matching";
import { Setting, gen } from "./settings";
import * as Stored from "./stored";
import {  SlotObject, createSlot } from "./slot";
import { snakeToPascal } from "./shareds";

const toArray = <T>(e: T | Array<T>): Array<T> => (Array.isArray(e) ? e : [e]);

type PascalCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer Rest}`
    ? `${Capitalize<P1>}${PascalCase<`${P2}${Rest}`>}`
    : Capitalize<S>;

export const retrive = <const N extends string>(
  children: ReactNode,
  ...settings: Array<Setting<N>>
) =>
  E.gen(function* (_) {
    const stored = yield* _(Stored.createStored<N>());

    yield* _(
      toArray(children),
      A.map(stored.append),
      E.all,
      E.provide(MatchingLive),
    );

    yield* _(settings, A.map(stored.filtered), E.all);
    yield* _(settings, A.map(stored.overwrite), E.all);
    const getComponents = yield* _(stored.get, E.map(createSlot));

    return pipe(
      settings,
      A.some((item) => item.name === "default"),
      (h) => (h ? settings : A.append(settings, gen("default", {}))),
      A.map(
        ({ name }) =>
          [name, getComponents(name)] as [N | "default", SlotObject],
      ),
      R.fromEntries,
      R.mapKeys(snakeToPascal),
    ) as Record<PascalCase<N | "default">, SlotObject>;
  }).pipe(E.runSync);
