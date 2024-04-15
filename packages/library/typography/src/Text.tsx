import React, { CSSProperties } from "react";
import { ClassValue, cn } from "@namelessdev/helper";
import { retrive, gen } from "@namelessdev/slots";

type Blocks =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "em"
  | "kbd"
  | "code"
  | "a";

type TextElement = React.ElementRef<Blocks>;

type TextProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
};

export const Text = React.forwardRef<TextElement, TextProps>(
  ({ as: As = "p", className, children, ...props }, fref) => {
    // @ts-ignore
    const propses = (props) =>
      Object.assign(
        {},
        props,
        ((props) => ({
          className:
            cn("text-nameless-gray-12", props.className as string, className) ||
            null,
          style: Object.assign(
            {},
            {
              textDecorationThickness: "min(2px,max(1px,.05em))",
              textUnderlineOffset: "calc(.025em + 2px)",
            },
            props.style || {},
          ),
        }))(props),
      );

    const { Parent, Default } = retrive(
      children,
      gen("parent", {
        overwrite: {
          className: (cname: string) =>
            cn("text-nameless-gray-12", cname, className) || "",
          style: (style: CSSProperties) =>
            Object.assign(
              {},
              {
                textDecorationThickness: "min(2px,max(1px,.05em))",
                textUnderlineOffset: "calc(.025em + 2px)",
              },
              style || {},
            ),
        },
      }),
    );

    return (
      <Parent.Render>
        <As
          ref={fref}
          {...(As instanceof Object ? props : propses(props as any))}
          children={Default.raw()}
        />
      </Parent.Render>
    );
  },
);
