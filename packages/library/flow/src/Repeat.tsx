import React, { ReactNode, memo } from "react";
import { For } from "./For";

type RepeatProps = {
  count: number;
  children: (item: number, index: number) => ReactNode;
  empty?: ReactNode | (() => ReactNode);
};

export const Repeat: React.FC<RepeatProps> = memo(
  ({ count, children, empty }) => (
    <For items={Array.from({ length: count }).map((_, i) => i)} empty={empty}>
      {children}
    </For>
  ),
);
