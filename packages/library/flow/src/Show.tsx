import { Logical } from "@namelessdev/helper";
import { FC, ReactNode } from "react";

type Props = {
  when: boolean;
  fallback?: ReactNode;
  children: ReactNode;
};

export const Show: FC<Props> = ({ when, fallback, children }) => {
  return Logical.when(when, children, fallback || null);
};
