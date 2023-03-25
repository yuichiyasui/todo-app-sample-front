import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";

type Props = { hasError: boolean } & ComponentPropsWithRef<"input">;

export const InputPassword = forwardRef<HTMLInputElement, Props>(
  ({ hasError, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="password"
        className={clsx(
          "input",
          "input-bordered",
          "w-full",
          hasError && "input-error",
          props.className,
        )}
      />
    );
  },
);

InputPassword.displayName = "InputPassword";
