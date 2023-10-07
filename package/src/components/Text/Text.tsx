import * as React from "react";
import { Typography, colors, typography } from "../../styles";
import { ColorProps, Colors, Depth } from "../../styles/colors/types";
import styled from "styled-components";

export interface TextProps extends React.PropsWithChildren, ColorProps {
  tg?: Typography;
  td?: React.CSSProperties["textDecoration"];
  tt?: React.CSSProperties["textTransform"];
  ta?: React.CSSProperties["textAlign"];
  size?: React.CSSProperties["fontSize"];
  fw?: React.CSSProperties["fontWeight"];
}

interface StyledProps {
  $tg: Typography;
  $td: React.CSSProperties["textDecoration"];
  $tt: React.CSSProperties["textTransform"];
  $ta: React.CSSProperties["textAlign"];
  $size: React.CSSProperties["fontSize"];
  $fw: React.CSSProperties["fontWeight"];
  $c: Colors;
  $cd: Depth;
}

const StyledText = styled.p<StyledProps>`
  ${({ $tg }) => typography[$tg]}
  font-weight: ${({ $fw }) => $fw};
  font-size: ${({ $size }) => $size};
  text-align: ${({ $ta }) => $ta};
  text-transform: ${({ $tt }) => $tt};
  text-decoration: ${({ $td }) => $td};
  color: ${({ $c, $cd }) => $c && $cd && colors[$c][$cd]};
`;

const Text: React.FC<TextProps> = (props) => {
  const {
    children,
    tg = "text-md",
    td,
    tt,
    ta,
    size,
    fw,
    c = "gray",
    cd = 25,
    ...rest
  } = props;
  return (
    <StyledText
      $tg={tg}
      $td={td}
      $tt={tt}
      $ta={ta}
      $size={size}
      $fw={fw}
      $c={c}
      $cd={cd}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Text;
