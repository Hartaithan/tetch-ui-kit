import * as React from "react";
import { Typography, colors } from "../../styles";
import clsx from "../../utils/classes";
import typography from "../../styles/typography/Typography.module.css";
import { ColorProps } from "../../styles/colors/types";

export interface TextProps
  extends React.ComponentPropsWithoutRef<"p">,
    ColorProps {
  tg?: Typography;
  td?: React.CSSProperties["textDecoration"];
  tt?: React.CSSProperties["textTransform"];
  ta?: React.CSSProperties["textAlign"];
  size?: React.CSSProperties["fontSize"];
  fw?: React.CSSProperties["fontWeight"];
}

const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    children,
    tg = "text-md",
    td,
    tt,
    ta,
    size,
    fw,
    c,
    cd = 500,
    style,
    ...rest
  } = props;
  return (
    <p
      className={clsx(className, typography[tg])}
      style={{
        fontWeight: fw,
        fontSize: size,
        textAlign: ta,
        textTransform: tt,
        textDecoration: td,
        color: c && cd && colors[c][cd],
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
