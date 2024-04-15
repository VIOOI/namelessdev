import React from "react";
import { Box } from "./Box";
import { ClassValue } from "@namelessdev/helper";

type GridElement = React.ElementRef<"div">;

type GridProps = React.ComponentPropsWithRef<"div"> & {
  as?: React.ElementType;
  className?: ClassValue;
};

export const Grid = React.forwardRef<GridElement, GridProps>(
  ({ className, children, ...props }, fref) => {
    return (
      <Box
        className={["grid grid-cols-3 gap-3", className] as ClassValue & string}
        {...props}
        ref={fref}
      >
        {children}
      </Box>
    );
  },
);
