import React from "react";
import { Box } from "./Box";
import { ClassValue } from "@namelessdev/helper";

type FlexElement = React.ElementRef<"div">;

type FlexProps = React.ComponentPropsWithRef<"div"> & {
  as?: React.ElementType;
  className?: ClassValue;
};

export const Flex = React.forwardRef<FlexElement, FlexProps>(
  ({ className, children, ...props }, fref) => {
    return (
      <Box
        className={
          ["flex justify-center items-center gap-3", className] as ClassValue &
            string
        }
        {...props}
        ref={fref}
      >
        {children}
      </Box>
    );
  },
);
