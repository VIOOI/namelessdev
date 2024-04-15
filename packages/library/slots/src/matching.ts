// @ts-nocheck
import { Brand, Context, Effect, Layer, Match as M, String } from "effect";
import { isNotUndefined } from "effect/Predicate";
import { ReactNode, isValidElement } from "react";

export type MS = [string, ReactNode] & Brand.Brand<"MS">;

const isReactNode = (value: any): value is ReactNode =>
  typeof value === "string" ||
  typeof value === "number" ||
  typeof value === "boolean" ||
  value === null ||
  React.isValidElement(value) ||
  (Array.isArray(value) && value.every(isReactNode));

export const MS = Brand.refined<MS>(
  (n) => String.isString(n.at(0)) && isReactNode(n.at(1)),
  (n) => Brand.error(`Slot ${n.at(0)} is an unselected slot`),
);

export class Matching extends Context.Tag("@app/matching")<
  Matching,
  {
    get: (children: ReactNode) => Effect.Effect<MS, never, never>;
  }
>() {}


export const MatchingLive = Layer.succeed(Matching, {
  get: (children) => {
    if (!isValidElement(children))
      return Effect.succeed(MS(["default", children]));
    return M.value(children).pipe(
      M.when(
        {
          type: (type: any) =>
            isNotUndefined(type) && isNotUndefined(type.slot),
        },
        (slot) => {
          const childrenSlot: ReactNode =
            slot.type._type! === "Slot" ? slot.props.children : slot;
          return MS([slot.type.slot!, childrenSlot]);
        },
      ),
      M.when(
        {
          type: "slot",
        },
        (slot) => {
          return MS([slot.props.name!, slot.props.children]);
        },
      ),
      M.when(
        {
          props: (props: any) => isNotUndefined(props.slot),
        },
        (slot) => {
          return MS([slot.props.slot!, slot]);
        },
      ),
      M.orElse((slot) => MS(["default" as N, slot])),
    );
  },
});

// export const Matching = <const N extends string>(
//   children: ReactNode,
// ): [N | "default", ReactNode] => {
//   if (!isValidElement(children)) return ["default" as N, children];
//   return M.value(children).pipe(
//     M.when(
//       {
//         type: (type: any) => isNotUndefined(type) && isNotUndefined(type.slot),
//       },
//       (slot) => {
//         const childrenSlot: ReactNode =
//           slot.type._type! === "Slot" ? slot.props.children : slot;
//         return [slot.type.slot! as N, childrenSlot];
//       },
//     ),
//     M.when(
//       {
//         type: "slot",
//       },
//       (slot) => {
//         return [slot.props.name! as N, slot.props.children as ReactNode];
//       },
//     ),
//     M.when(
//       {
//         props: (props: any) => isNotUndefined(props.slot),
//       },
//       (slot) => {
//         return [slot.props.slot! as N, slot as ReactNode];
//       },
//     ),
//     M.orElse((slot) => ["default" as N, slot]),
//   ) as [N | "default", ReactNode];
// };
