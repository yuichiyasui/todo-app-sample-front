import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";

type Props = { hasError: boolean } & ComponentPropsWithRef<"input"> &
  Required<Pick<ComponentPropsWithRef<"input">, "id">>;

export const InputEmail = forwardRef<HTMLInputElement, Props>(
  ({ hasError, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="email"
        aria-invalid={hasError ? "true" : "false"}
        placeholder="メールアドレスを入力してください"
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

InputEmail.displayName = "InputEmail";
