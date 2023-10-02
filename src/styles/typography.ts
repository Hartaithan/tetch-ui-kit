import { CSSProperties } from "react";

export type Typography =
  | "display-xxl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "display-xs"
  | "text-xl"
  | "text-lg"
  | "text-md"
  | "text-sm"
  | "text-xs";

export const typography: Record<string, CSSProperties> = {
  "display-xxl": {
    fontSize: 72,
    lineHeight: 90,
    fontStyle: "normal",
  },
  "display-xl": {
    fontSize: 60,
    lineHeight: 72,
    fontStyle: "normal",
  },
  "display-lg": {
    fontSize: 48,
    lineHeight: 60,
    fontStyle: "normal",
  },
  "display-md": {
    fontSize: 36,
    lineHeight: 44,
    fontStyle: "normal",
  },
  "display-sm": {
    fontSize: 30,
    lineHeight: 38,
    fontStyle: "normal",
  },
  "display-xs": {
    fontSize: 24,
    lineHeight: 32,
    fontStyle: "normal",
  },
  "text-xl": {
    fontSize: 20,
    lineHeight: 30,
    fontStyle: "normal",
  },
  "text-lg": {
    fontSize: 18,
    lineHeight: 28,
    fontStyle: "normal",
  },
  "text-md": {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: "normal",
  },
  "text-sm": {
    fontSize: 14,
    lineHeight: 20,
    fontStyle: "normal",
  },
  "text-xs": {
    fontSize: 12,
    lineHeight: 18,
    fontStyle: "normal",
  },
};
