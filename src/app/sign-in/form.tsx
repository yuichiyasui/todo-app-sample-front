"use client";

import { useState } from "react";

import { SubmitButton } from "@/components/button";
import { Label } from "@/components/label";
import { InputEmail, InputPassword } from "@/components/text-field";

export const Form = () => {
  const [emailError] = useState();

  const emailInputId = "email";
  const passwordInputId = "password";

  return (
    <form noValidate>
      <div>
        <div className="mb-4">
          <Label htmlFor={emailInputId} className="mb-2">
            メールアドレス
          </Label>
          <InputEmail
            id={emailInputId}
            hasError={!!emailError}
            placeholder="todo@example.com"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor={passwordInputId} className="mb-2">
            パスワード
          </Label>
          <InputPassword
            id={passwordInputId}
            placeholder="パスワードを入力してください"
          />
        </div>
      </div>
      <SubmitButton>ログイン</SubmitButton>
    </form>
  );
};
