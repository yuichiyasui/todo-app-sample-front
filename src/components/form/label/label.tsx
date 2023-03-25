import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"label">;

export const Label = (props: Props) => {
  return (
    <label
      {...props}
      className={clsx(
        "inline-block",
        "text-stone-700",
        "text-sm",
        props.className,
      )}
    >
      {props.children}
    </label>
  );
};
