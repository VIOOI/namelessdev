import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "em";

type EmElement = React.ElementRef<Blocks>;

type EmProps = React.ComponentPropsWithRef<Blocks> & {
  className?: ClassValue;
};

export const Em = React.forwardRef<EmElement, EmProps>(
  ({ children, className, ...props }, fref) => {
    return (
      <Text
        className={
          ["italic inline-block font-light", className] as ClassValue &
            string
        }
        as="em"
        {...props}
        ref={fref}
      >
        {children}
      </Text>
    );
  },
);
