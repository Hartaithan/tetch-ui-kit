import * as React from "react";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
