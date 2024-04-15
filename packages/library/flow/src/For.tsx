import React, { ReactElement, ReactNode } from "react";

type ForProps<T> = {
  items: T[];
  children: (item: T, index: number) => ReactNode;
  keys?: (item: T, index: number) => React.Key;
  empty?: ReactNode | (() => ReactNode) | React.FC;
};

export const For = <T,>({
  items,
  children,
  keys = (_, index) => index,
  empty,
}: ForProps<T>): ReactElement | null => {
  if (items.length === 0)
    return <>{typeof empty === "function" ? empty({}) : empty}</>;

  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={keys(item, index)}>
          {children(item, index)}
        </React.Fragment>
      ))}
    </>
  );
};
