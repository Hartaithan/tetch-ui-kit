import * as React from "react";
import styles from "./Button.module.css";
import { ButtonSize } from "./Button.types";
import clsx from "../../utils/classes";
import { ColorProps } from "../../styles/colors/types";
import { colors } from "../../styles";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    ColorProps {
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    size = "md",
    c = "brand",
    cd = 500,
    style,
    ...rest
  } = props;
  return (
    <button
      className={clsx(className, styles.button, styles[`button-${size}`])}
      style={{
        backgroundColor: c && cd && colors[c][cd],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
