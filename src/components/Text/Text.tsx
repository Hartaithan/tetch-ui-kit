import React, { FC } from "react";

export type TextProps = React.ComponentPropsWithoutRef<"p">;

const Text: FC<TextProps> = (props) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Text;
