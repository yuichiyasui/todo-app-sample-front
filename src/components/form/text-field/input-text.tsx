import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";

type Props = { hasError: boolean } & ComponentPropsWithRef<"input"> &
  Required<Pick<ComponentPropsWithRef<"input">, "id">>;

export const InputText = forwardRef<HTMLInputElement, Props>(
  ({ hasError, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        aria-invalid={hasError ? "true" : "false"}
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

InputText.displayName = "InputText";
