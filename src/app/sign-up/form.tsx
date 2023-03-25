"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { SubmitButton } from "@/components/button";
import { Label } from "@/components/label";
import { InputEmail } from "@/components/text-field";
import { sleep } from "@/utils/sleep";

type Inputs = {
  email: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = async (data) => {
    // TODO: call API to send email
    await sleep(1);
    alert(JSON.stringify(data));
  };

  if (isSubmitted) {
    return <p className="text-sm text-center">メールアドレスを送信しました</p>;
  }

  const emailInputId = "email";
  const emailErrorMessageId = `${emailInputId}-error`;

  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <div className="mb-4">
        <Label htmlFor={emailInputId} className="mb-2">
          メールアドレス
        </Label>
        <InputEmail
          {...register("email", {
            required: "メールアドレスが入力されていません",
          })}
          hasError={!!errors.email}
          aria-errormessage={emailErrorMessageId}
          id={emailInputId}
          placeholder="メールアドレスを入力してください"
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
      <SubmitButton disabled={isSubmitting}>メールを送信する</SubmitButton>
    </form>
  );
};
