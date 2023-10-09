import * as React from "react";
import styles from "./Input.module.css";
import clsx from "../../utils/classes";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  inputClassName?: string | undefined;
  label?: string;
  labelClassName?: string | undefined;
  hint?: string;
  hintClassName?: string | undefined;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    inputClassName,
    label,
    labelClassName,
    hint,
    hintClassName,
    ...rest
  } = props;
  return (
    <div className={clsx(className, styles.wrapper)}>
      {label && (
        <label className={clsx(labelClassName, styles.label)}>{label}</label>
      )}
      <input className={clsx(inputClassName, styles.input)} {...rest} />
      {hint && <p className={clsx(hintClassName, styles.hint)}>{hint}</p>}
    </div>
  );
};

export default Input;
