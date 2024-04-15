import React from "react";
import { Box } from "./Box";
import { ClassValue } from "@namelessdev/helper";

type StackElement = React.ElementRef<"div">;

type StackProps = React.ComponentPropsWithRef<"div"> & {
  as?: React.ElementType;
  className?: ClassValue;
};

export const Stack = React.forwardRef<StackElement, StackProps>(
  ({ className, children, ...props }, fref) => {
    return (
      <Box
        className={
          [
            "flex flex-col justify-center items-center gap-3",
            className,
          ] as ClassValue & string
        }
        {...props}
        ref={fref}
      >
        {children}
      </Box>
    );
  },
);
