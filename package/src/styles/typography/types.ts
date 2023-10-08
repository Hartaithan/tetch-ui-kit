import { DisplayTypography } from "../../components/Display/Display.types";
import { TextTypography } from "../../components/Text/Text.types";

export type Typography = DisplayTypography | TextTypography;

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export interface TypographyWeightProps {
  weight?: TypographyWeight;
}
