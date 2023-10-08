import * as React from "react";
import clsx from "../../utils/classes";
import styles from "./Text.module.css";
import weights from "../../styles/typography/TypographyWeight.module.css";
import { TextTypography } from "./Text.types";
import { TypographyWeightProps } from "../../styles/typography/types";

export interface TextProps
  extends React.ComponentPropsWithoutRef<"p">,
    TypographyWeightProps {
  size?: TextTypography;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    children,
    size = "text-md",
    weight = "regular",
    ...rest
  } = props;
  return (
    <p
      className={clsx(className, styles.text, styles[size], weights[weight])}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
