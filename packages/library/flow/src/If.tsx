import React, { FC, ReactElement } from "react";
import { Logical } from "@namelessdev/helper";
import { retrive, Slot, withSlot, gen } from "@namelessdev/slots";

type Props = {
  when: boolean;
  children: ReactElement | ReactElement[];
};

export const If: FC<Props> = ({ when, children }) => {
  const { True, False } = retrive(children, gen("true"), gen("false"));

  return Logical.when(when, <True.Render />, <False.Render />);
};

export const True: Slot<"true"> = withSlot("true");
export const False: Slot<"false"> = withSlot("false");
