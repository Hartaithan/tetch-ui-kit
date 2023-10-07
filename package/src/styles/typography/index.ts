import { Typography } from "./types";
import { css, RuleSet } from "styled-components";

const base = css`
  font-family: "Inter", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

export const typography: Record<Typography, RuleSet> = {
  "display-xxl": css`
    ${base}
    font-size: 72px;
    line-height: 90px;
    letter-spacing: -1.44px;
  `,
  "display-xl": css`
    ${base}
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -1.2px;
  `,
  "display-lg": css`
    ${base}
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.96px;
  `,
  "display-md": css`
    ${base}
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.72px;
  `,
  "display-sm": css`
    ${base}
    font-size: 30px;
    line-height: 38px;
  `,
  "display-xs": css`
    ${base}
    font-size: 24px;
    line-height: 32px;
  `,
  "text-xl": css`
    ${base}
    font-size: 20px;
    line-height: 30px;
  `,
  "text-lg": css`
    ${base}
    font-size: 18px;
    line-height: 28px;
  `,
  "text-md": css`
    ${base}
    font-size: 16px;
    line-height: 24px;
  `,
  "text-sm": css`
    ${base}
    font-size: 14px;
    line-height: 20px;
  `,
  "text-xs": css`
    ${base}
    font-size: 12px;
    line-height: 18px;
  `,
};
