import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "q" | "a";

type QuoteElement = React.ElementRef<Blocks>;

type QuoteProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
};

export const Quote = React.forwardRef<QuoteElement, QuoteProps>(
  ({ as = "q", children, className, ...props }, fref) => {
    return (
      <Text
        className={
          ["italic font-light", className] as ClassValue & string
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
