import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";

type Blocks = "code";

type CodeElement = React.ElementRef<Blocks>;

type CodeProps = React.ComponentPropsWithRef<Blocks> & {
  className?: ClassValue;
};

export const Code = React.forwardRef<CodeElement, CodeProps>(
  ({ children, className, ...props }, fref) => {
    return (
      <Text
        className={
          [
            "font-code bg-blue-950 text-blue-400 px-1 py-[0.2rem] rounded-md",
            className,
          ] as ClassValue & string
        }
        as="code"
        {...props}
        ref={fref!}
      >
        {children}
      </Text>
    );
  },
);
