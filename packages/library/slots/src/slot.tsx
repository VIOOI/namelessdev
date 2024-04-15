import {
  ReadonlyArray as A,
  ReadonlyRecord as R,
  Option as O,
  Hash,
  pipe,
  Effect,
} from "effect";
import React, { FC, ReactNode, isValidElement } from "react";
import { snakeToPascal } from "./shareds";
import { NoInfer } from "effect/Types";

export type Slot = React.FC<{
  children?: ReactNode;
  render?: FC<{ children: React.ReactNode }>;
}>;

export type SlotObject = {
  has: () => boolean;
  raw: () => ReactNode;
  Render: Slot;
};

const has = <const N extends string>(
  stored: Record<N, ReactNode[]>,
  name: N[number],
) =>
  Effect.sync(() =>
    pipe(
      stored,
      R.get(name as NoInfer<N>),
      O.getOrElse(() => []),
      (slot) => slot.length > 0,
    ),
  ).pipe(Effect.runSync);

const raw = <const N extends string>(
  stored: Record<N, ReactNode[]>,
  name: N[number],
) =>
  Effect.sync(() =>
    pipe(
      stored,
      R.get(name as NoInfer<N>),
      O.getOrElse(() => []),
    ),
  ).pipe(Effect.runSync);

const getChildrens = <const N extends string>(
  stored: Record<N, ReactNode[]>,
  name: N[number],
  children: ReactNode,
) =>
  Effect.sync(() =>
    pipe(
      stored,
      R.get(name as NoInfer<N>),
      O.getOrElse(() => children),
      (children) => (Array.isArray(children) ? children : [children]),
      A.fromIterable,
      A.map((node, index) => {
        if (!isValidElement(node)) return node;
        return pipe(
          node,
          R.modify("key", () => Hash.string(String(node.type) + index)),
        );
      }),
    ),
  ).pipe(Effect.runSync);

export const createSlot =
  <const N extends string>(stored: Record<N, ReactNode[]>) =>
  (name: N[number]) => {
    const Render: Slot = ({
      children,
      render: Render = ({ children }) => children,
    }) => <Render>{getChildrens(stored, name, children)}</Render>;

    Render.displayName = snakeToPascal(name);
    // Component.has = () => has(stored, name);
    // Component.raw = () => raw(stored, name);

    const Component: {
      has: () => boolean;
      raw: () => ReactNode;
      Render: Slot;
    } = {
      has: () => has(stored, name),
      raw: () => raw(stored, name),
      Render,
    };

    return Component;
  };
