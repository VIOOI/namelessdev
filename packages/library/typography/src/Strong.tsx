import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "strong" | "a";

type StrongElement = React.ElementRef<Blocks>;

type StrongProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
};

export const Strong = React.forwardRef<StrongElement, StrongProps>(
  ({ as = "strong", children, className, ...props }, fref) => {
    return (
      <Text
        className={
          ["font-extrabold", className] as ClassValue & string
        }
        as={as}
        {...props}
        ref={fref}
      >
        {children}
      </Text>
    );
  },
);
