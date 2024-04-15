import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingElement = React.ElementRef<Blocks>;

type HeadingProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
};

export const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  ({ as = "h3", children, className, ...props }, fref) => {
    return (
      <Text
        className={
          ["font-extrabold text-2xl", className] as ClassValue & string
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
