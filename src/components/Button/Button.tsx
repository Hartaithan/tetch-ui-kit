import React, { FC } from "react";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Button;
