import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

export const SubmitButton = ({
  children,
  type = "submit",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx([
        "btn",
        props.disabled ? "btn-ghost" : "btn-primary",
        props.className,
      ])}
    >
      {children}
    </button>
  );
};
