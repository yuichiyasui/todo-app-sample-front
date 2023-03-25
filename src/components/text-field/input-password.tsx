import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

export const InputPassword = (props: Props) => {
  return (
    <input
      {...props}
      type="password"
      className={clsx("input", "input-bordered", "w-full", props.className)}
    />
  );
};
