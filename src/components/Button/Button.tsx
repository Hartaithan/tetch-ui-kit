import React, { FC } from "react";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
