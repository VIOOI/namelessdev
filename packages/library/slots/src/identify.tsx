// @ts-nocheck
import React, {
  ComponentPropsWithRef,
  ElementType,
  FC,
  ReactNode,
} from "react";

export type Slot<
  N extends string,
  C extends ReactNode = ReactNode,
> = ReturnType<typeof withSlot<N, C>>;

export const withSlot = <const N extends string, C extends ReactNode = ReactNode>(
  name: N,
): FC<{ children: C }> & { slot: N; _type: "Slot" } => ({
  slot: name,
  _type: "Slot",
  ...({ children }) => children,
});

export type SlotWrap<
  N extends string,
  T extends ElementType | FC,
  C extends ReactNode = ReactNode,
> = ReturnType<typeof withWrap<N, T, C>>;

export const withWrap = <
  N extends string,
  T extends ElementType | FC,
  C extends ReactNode = ReactNode,
>(
  name: N,
  As: ElementType<ComponentPropsWithRef<T>>,
  props?: ComponentPropsWithRef<T>,
) => ({
  slot: name,
  element: As,
  _type: "Wrapper",
  ...(
    rest: Omit<ComponentPropsWithRef<T>, keyof typeof props> & { children?: C },
  ) => (
    <As {...props} {...rest}>
      {rest.children}
    </As>
  ),
});
