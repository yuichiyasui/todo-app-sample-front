"use client";

import { SubmitButton } from "@/components/button";
import { Label } from "@/components/label";
import { InputEmail } from "@/components/text-field";
import { FormEvent, useState } from "react";

const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const Form = () => {
  const [sentEmail, setSentEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [canSubmit, setCanSubmit] = useState(true);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError("");

    if (!email) {
      // TODO: validate email
      setEmailError("メールアドレスを正しく入力してください");
      return;
    }

    setCanSubmit(false);
    // TODO: call API to send email
    await sleep(1);

    setSentEmail(true);
    setEmail("");
  };

  if (sentEmail) {
    return <p className="text-sm text-center">メールアドレスを送信しました</p>;
  }

  const emailInputId = "email";

  return (
    <form noValidate onSubmit={submit}>
      <div className="mb-4">
        <Label htmlFor={emailInputId} className="mb-2">
          メールアドレス
        </Label>
        <InputEmail
          id={emailInputId}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          hasError={!!emailError}
          placeholder="メールアドレスを入力してください"
        />
        {!!emailError && (
          <p
            id={`${emailInputId}-error`}
            aria-live="polite"
            className="text-red-500 text-sm empty:mt-0 mt-2"
          >
            {emailError}
          </p>
        )}
      </div>
      <SubmitButton disabled={!canSubmit}>メールを送信する</SubmitButton>
    </form>
  );
};
