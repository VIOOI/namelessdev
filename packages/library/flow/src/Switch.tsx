// @ts-nocheck
import React, { FC, ReactElement, ReactNode } from "react";
import { retrive, gen } from "@namelessdev/slots";
import * as M from "effect/Match";

interface SwitchProps {
  children: ReactNode;
  target: any;
}
M.number;
export const Switch: FC<SwitchProps> = ({ children, target }) => {
  const { Match, Orelse } = retrive(children, gen("match"), gen("orelse"));
  return M.type<any>().pipe(
    ...(Match.raw() as Array<ReactElement>).map((value) => {
      return M.when(value.props["when"], value.props["then"]);
    }),
    M.orElse(
      (Orelse.raw() as Array<ReactElement>)[0].props["then"] || (() => null),
    ),
  )(target);
};

interface DefaultProps<T> {
  then: (
    _: M.Types.WhenMatch<
      T,
      M.Types.PatternPrimitive<T> | M.Types.PatternBase<T>
    >,
  ) => unknown;
}

export function Default<T>(_: DefaultProps<T>) {
  return null;
}
Default.slot = "orelse";

interface MatchProps<T> {
  when: M.Types.PatternPrimitive<T> | M.Types.PatternBase<T>;
  then: (
    _: M.Types.WhenMatch<
      T,
      M.Types.PatternPrimitive<T> | M.Types.PatternBase<T>
    >,
  ) => unknown;
}

export function Match<T>(_: MatchProps<T>) {
  return null;
}
Match.slot = "match";
Match.Default = Default;
