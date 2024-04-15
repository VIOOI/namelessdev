import { clsx, ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // @ts-ignore
      nl: [(classPart: string) => classPart.startsWith("nl-")],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => customTwMerge(clsx(inputs));
