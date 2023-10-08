import * as React from "react";
import clsx from "../../utils/classes";
import styles from "./Display.module.css";
import weights from "../../styles/typography/TypographyWeight.module.css";
import { DisplayTypography } from "./Display.types";
import { TypographyWeightProps } from "../../styles/typography/types";

export interface DisplayProps
  extends React.ComponentPropsWithoutRef<"h1">,
    TypographyWeightProps {
  size?: DisplayTypography;
}

const Display: React.FC<DisplayProps> = (props) => {
  const {
    className,
    children,
    size = "display-md",
    weight = "regular",
    ...rest
  } = props;
  return (
    <p
      className={clsx(className, "display", styles[size], weights[weight])}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Display;
