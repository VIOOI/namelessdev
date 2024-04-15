import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "blockquote" | "a";

type BlockquoteElement = React.ElementRef<Blocks>;

type BlockquoteProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
};

export const Blockquote = React.forwardRef<BlockquoteElement, BlockquoteProps>(
  ({ as = "blockquote", children, className, ...props }, fref) => {
    return (
      <Text
        className={
          ["border-l-4 border-nameless-7 pl-3", className] as ClassValue & string
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
