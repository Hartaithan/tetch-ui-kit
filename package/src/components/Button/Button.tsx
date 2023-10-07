import * as React from "react";
import { ButtonSize } from "./Button.types";
import { Colors } from "../../styles/colors/types";
import { colors } from "../../styles";
import styled, { css, RuleSet } from "styled-components";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  c?: Colors;
  size?: ButtonSize;
}

interface StyledProps {
  $c: Colors;
  $size: ButtonSize;
}

const sizes: Record<ButtonSize, RuleSet> = {
  sm: css`
    padding: 8px 14px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  `,
  md: css`
    padding: 10px 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  `,
  lg: css`
    padding: 10px 18px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  `,
  xl: css`
    padding: 12px 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  `,
  xxl: css`
    padding: 16px 28px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  `,
};

const StyledButton = styled.button<StyledProps>`
  outline: none;
  border: none;
  cursor: pointer;

  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  color: #ffffff;
  background: ${({ $c }) => $c && colors[$c][500]};
  &:hover {
    background: ${({ $c }) => $c && colors[$c][700]};
  }

  ${({ $size }) => sizes[$size]}
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, size = "md", c = "brand", ...rest } = props;

  return (
    <StyledButton $size={size} $c={c} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
