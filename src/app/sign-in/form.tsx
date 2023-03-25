"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { SubmitButton } from "@/components/button";
import { Label } from "@/components/label";
import { InputEmail, InputPassword } from "@/components/text-field";
import { sleep } from "@/utils/sleep";

type Inputs = {
  email: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const signIn: SubmitHandler<Inputs> = async (data) => {
    // TODO: call API to sign in
    await sleep(1);
    alert(JSON.stringify(data));
  };

  const emailInputId = "email";
  const emailErrorMessageId = `${emailInputId}-error`;
  const passwordInputId = "password";
  const passwordErrorMessageId = `${passwordInputId}-error`;

  return (
    <form noValidate onSubmit={handleSubmit(signIn)}>
      <div>
        <div className="mb-4">
          <Label htmlFor={emailInputId} className="mb-2">
            メールアドレス
          </Label>
          <InputEmail
            {...register("email", {
              required: "メールアドレスが入力されていません",
            })}
            id={emailInputId}
            hasError={!!errors.email}
            aria-errormessage={emailErrorMessageId}
            placeholder="todo@example.com"
          />
          {!!errors.email?.message && (
            <p
              id={emailErrorMessageId}
              aria-live="polite"
              className="text-red-500 text-sm empty:mt-0 mt-2"
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor={passwordInputId} className="mb-2">
            パスワード
          </Label>
          <InputPassword
            {...register("password", {
              required: "パスワードが入力されていません",
            })}
            id={passwordInputId}
            hasError={!!errors.password}
            aria-errormessage={passwordErrorMessageId}
            placeholder="パスワードを入力してください"
          />
          {!!errors.password?.message && (
            <p
              id={passwordErrorMessageId}
              aria-live="polite"
              className="text-red-500 text-sm empty:mt-0 mt-2"
            >
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <SubmitButton disabled={isSubmitting}>ログイン</SubmitButton>
    </form>
  );
};
