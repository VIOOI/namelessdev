import { ReadonlyRecord as R } from "effect";
import { ReactNode } from "react";

export interface Setting<N extends string> {
  name: N;
  filter: (child: ReactNode) => boolean;
  overwrite: R.ReadonlyRecord<string, (props: any) => any>;
}

export const gen = <const N extends string>(
  name: N,
  config?: Partial<Omit<Setting<N>, "name">>,
): Setting<N> => ({
  name,
  filter: config && config.filter ? config.filter! : () => true,
  overwrite: config && config.overwrite ? config.overwrite! : {},
});
