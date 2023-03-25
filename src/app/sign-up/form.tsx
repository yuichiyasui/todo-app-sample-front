"use client";

import clsx from "clsx";
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
    return <p className="text-sm">メールアドレスを送信しました。</p>;
  }

  const emailInputId = "email";

  return (
    <form noValidate onSubmit={submit}>
      <div className="mb-4">
        <label
          htmlFor={emailInputId}
          className="inline-block mb-2 text-stone-700 text-sm"
        >
          メールアドレス
        </label>
        <input
          id={emailInputId}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          aria-invalid={emailError ? "true" : "false"}
          aria-required="true"
          aria-errormessage={`${emailInputId}-error`}
          placeholder="メールアドレスを入力してください"
          className={clsx(
            "block",
            "border",
            "w-full",
            "placeholder:text-sm",
            "py-2",
            "px-3",
            "rounded",
            emailError ? "border-red-500" : "border-gray-300",
          )}
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
      <button
        type="submit"
        className={clsx([
          "text-sm",
          "text-white",
          "px-4",
          "py-2",
          "rounded",
          canSubmit ? "bg-green-600" : "bg-gray-500/50",
        ])}
        disabled={!canSubmit}
      >
        メールを送信する
      </button>
    </form>
  );
};
