export type Colors =
  | "gray"
  | "brand"
  | "error"
  | "warning"
  | "success"
  | "blue-gray"
  | "blue-light"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "rose"
  | "orange";

export type ColorDepth =
  | 25
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export interface ColorProps {
  color?: Colors;
  depth?: ColorDepth;
}
