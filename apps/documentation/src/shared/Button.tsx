import React, { PropsWithChildren, FC, isValidElement } from "react";
import * as S from "@namelessdev/slots";
import { String } from "effect";

interface Props extends PropsWithChildren {}
const buttonSlots = S.retrive(
  S.settings("icon", {
    filter: isValidElement,
    overwrite: {
      className: String.concat(" text-blue-500 p-5"),
    },
  }),
  S.settings("icon_right"),
);

export const Button: FC<Props> = ({ children }) => {
  const Slots = buttonSlots(children);
  return (
    <div>
      <Slots.Icon />
    </div>
  );
};
