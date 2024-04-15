import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "a";

type LinkElement = React.ElementRef<Blocks>;

type LinkProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
};

export const Link = React.forwardRef<LinkElement, LinkProps>(
  ({ as = "a", children, className, ...props }, fref) => {
    return (
      <Text
        className={
          ["text-[#B19EFF]", className] as ClassValue & string
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
