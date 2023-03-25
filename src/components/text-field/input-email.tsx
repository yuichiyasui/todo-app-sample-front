import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = { hasError: boolean } & ComponentPropsWithoutRef<"input"> &
  Required<Pick<ComponentPropsWithoutRef<"input">, "id">>;

export const InputEmail = (props: Props) => {
  return (
    <input
      {...props}
      type="email"
      aria-invalid={props.hasError ? "true" : "false"}
      aria-errormessage={`${props.id}-error`}
      placeholder="メールアドレスを入力してください"
      className={clsx(
        "input",
        "input-bordered",
        "w-full",
        props.hasError && "input-error",
      )}
    />
  );
};
