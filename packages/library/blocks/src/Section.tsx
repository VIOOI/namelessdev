import React from "react";
import { Box } from "./Box";
import { ClassValue } from "@namelessdev/helper";

type SectionElement = React.ElementRef<"section">;

type SectionProps = React.ComponentPropsWithRef<"section"> & {
  className?: ClassValue;
};

export const Section = React.forwardRef<SectionElement, SectionProps>(
  ({ className, children, ...props }, fref) => {
    return (
      <Box
        className={[className] as ClassValue & string}
        {...props}
        as="section"
        ref={fref}
      >
        {children}
      </Box>
    );
  },
);
