import * as React from "react";
import { Typography } from "../../styles";
import clsx from "../../utils/classes";
import typography from "../../styles/typography/Typography.module.css";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
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
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
