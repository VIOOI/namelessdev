import React from "react";
import { Box } from "./Box";
import { ClassValue } from "@namelessdev/helper";

type ConteinerElement = React.ElementRef<"div">;

type ConteinerProps = React.ComponentPropsWithRef<"div"> & {
  as?: React.ElementType;
  className?: ClassValue;
};

export const Conteiner = React.forwardRef<ConteinerElement, ConteinerProps>(
  ({ className, children, ...props }, fref) => {
    return (
      <Box
        className={
          ["container mx-auto px-4 max-w-md", className] as ClassValue & string
        }
        {...props}
        ref={fref}
      >
        {children}
      </Box>
    );
  },
);
