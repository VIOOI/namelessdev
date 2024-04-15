import React from "react";
import { ClassValue } from "@namelessdev/helper";
import { Text } from "./Text";
import { Show } from "@namelessdev/flow";
import { Box } from "@namelessdev/blocks";

type Blocks = "kbd" | "a";

type KbdElement = React.ElementRef<Blocks>;

type KbdProps = React.ComponentPropsWithRef<Blocks> & {
  as?: React.ElementType | React.FC;
  className?: ClassValue;
  symbol?: KbdKey;
};

type KbdKey = | "command" | "shift" | "ctrl" | "option" | "enter"
  | "delete" | "escape" | "tab" | "capslock" | "up"
  | "right" | "down" | "left" | "pageup" | "pagedown"
  | "home" | "end" | "help" | "space";

const SymbolKey = new Map(
  Object.entries({
    command: "⌘",
    shift: "⇧",
    ctrl: "⌃",
    option: "⌥",
    enter: "⏎",
    delete: "⌫",
    escape: "⎋",
    tab: "↹",
    capslock: "⇪",
    up: "↑",
    right: "→",
    down: "↓",
    left: "←",
    pageup: "⇞",
    pagedown: "⇟",
    home: "↖",
    end: "↘",
    help: "?",
    space: "␣",
  }) as Array<[KbdKey, string]>,
);

const boxShadowStyle = `
  rgba(221, 234, 248, 0.08) 0px -0.6px 6px 0px inset, 
  rgba(241, 247, 254, 0.71) 0px 0.6px 0px 0px inset, 
  rgba(216, 244, 246, 0.035) 0px 3px 6px 0px inset, 
  rgba(0, 0, 0, 0.9) 0px -1.2px 0px 0px inset, 
  rgba(217, 237, 255, 0.25) 0px 0px 0px 0.9px, 
  rgba(0, 0, 0, 0.95) 0px 0.96px 2.04px 0px
`;

export const Kbd = React.forwardRef<KbdElement, KbdProps>(
  ({ as = "kbd", children, className, symbol, style, ...props }, fref) => {
    return (
      <Text
        className={
          [
            "bg-unnamed-1 text-nameless-12 rounded-md text-sm",
            "px-2 -py-2 inline-flex items-center min-h-[28px]",
            className,
          ] as ClassValue & string
        }
        as={as}
        style={Object.assign({ boxShadow: boxShadowStyle }, style)}
        {...props}
        ref={fref}
      >
        <Show when={Boolean(symbol)}>
          <Box as="span" className="mr-2 text-xl">
            {SymbolKey.get(symbol!)}
          </Box>
        </Show>
        {children}
      </Text>
    );
  },
);
