import * as React from "react";
import { Typography } from "../../styles";
import clsx from "../../utils/classes";
import typography from "../../styles/Typography/Typography.module.css";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
  tg?: Typography;
}

const Text: React.FC<TextProps> = (props) => {
  const { className, children, tg = "text-md", ...rest } = props;
  return (
    <p className={clsx(className, typography[tg])} {...rest}>
      {children}
    </p>
  );
};

export default Text;
