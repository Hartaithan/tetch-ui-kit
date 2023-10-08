import * as React from "react";
import styles from "./Button.module.css";
import { ButtonSize, ButtonVariant } from "./Button.types";
import clsx from "../../utils/classes";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    size = "md",
    variant = "primary",
    ...rest
  } = props;
  return (
    <button
      className={clsx(
        className,
        styles.button,
        styles[`button-${size}`],
        styles[`button-${variant}`]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
