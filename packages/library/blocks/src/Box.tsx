import React from "react";
import { retrive, gen } from "@namelessdev/slots";

import { ClassValue, cn, mergeProps, splitProps } from "@namelessdev/helper";

type Blocks = "div" | "section" | "label";

type BoxElement = React.ElementRef<Blocks>;

type BoxProps<T extends React.ElementType> = React.ComponentPropsWithRef<T> & {
  as?: T | React.FC;
  className?: ClassValue;
};

export const Box = React.forwardRef<BoxElement, BoxProps<any>>(
  ({ as: As = "div", ...props }, fref) => {
    const [sett, other] = splitProps(props, ["className", "children"]);

    const propses = (oprops: BoxProps<typeof As>) =>
      mergeProps(oprops, (props: BoxProps<typeof As>) => ({
        className: cn(props.className, sett.className) ?? "",
        ref: fref,
      }));

    const { Parent, Default } = retrive(
      sett.children,
      gen("parent", {
        overwrite: {
          className: (className: string) => cn(className, sett.className) ?? "",
          ref: () => fref,
        },
      }),
    );

    return (
      <Parent.Render>
        <As
          ref={fref}
          {...(As instanceof Object ? props : propses(other))}
          children={Default.raw()}
        />
      </Parent.Render>
    );
  },
);
