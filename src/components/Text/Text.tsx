import React, { FC } from "react";

export type TextProps = React.ComponentPropsWithoutRef<"p">;

const Text: FC<TextProps> = (props) => {
  const { children, ...rest } = props;
  return <p {...rest}>{children}</p>;
};

export default Text;
