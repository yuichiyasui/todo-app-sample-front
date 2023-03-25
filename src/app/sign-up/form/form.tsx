"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { SubmitButton } from "@/components/button";
import { ErrorMessage } from "@/components/form/error-message";
import { Label } from "@/components/form/label";
import { InputPassword } from "@/components/form/text-field";
import { InputText } from "@/components/form/text-field/input-text";
import { sleep } from "@/utils/sleep";

type Inputs = {
  userName: string;
  password: string;
  confirmationPassword: string;
};

export const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = async (data) => {
    // TODO: call API to sign up
    await sleep(1);
    alert(JSON.stringify(data));
    router.push("/sign-up/completion");
  };

  const userNameInputId = "user-name";
  const userNameErrorMessageId = `${userNameInputId}-error`;
  const passwordInputId = "password";
  const passwordErrorMessageId = `${passwordInputId}-error`;
  const confirmationPasswordInputId = "confirmation-password";
  const confirmationPasswordErrorMessageId = `${confirmationPasswordInputId}-error`;

  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <div className="mb-4">
        <Label htmlFor={userNameInputId} className="mb-2">
          表示名
        </Label>
        <InputText
          {...register("userName", {
            required: "表示名が入力されていません",
            maxLength: { value: 10, message: "10文字を超えています" },
          })}
          id={userNameInputId}
          hasError={!!errors.userName}
          placeholder="例：タスク太郎"
          maxLength={10}
          required
          aria-errormessage={userNameErrorMessageId}
        />
        <small>10文字以内</small>
        {!!errors.userName?.message && (
          <ErrorMessage
            id={userNameErrorMessageId}
            message={errors.userName.message}
            className="mt-2"
          />
        )}
      </div>
      <div className="mb-4">
        <Label htmlFor={passwordInputId} className="mb-2">
          パスワード
        </Label>
        <InputPassword
          {...register("password", {
            required: "パスワードが入力されていません",
            minLength: { value: 8, message: "8文字以上になっていません" },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/,
              message: "英字または数字が含まれていません",
            },
          })}
          id={passwordInputId}
          hasError={!!errors.password}
          aria-errormessage={passwordErrorMessageId}
          maxLength={32}
          required
        />
        <small>英数含む8文字以上</small>
        {!!errors.password?.message && (
          <ErrorMessage
            id={passwordErrorMessageId}
            message={errors.password.message}
            className="mt-2"
          />
        )}
      </div>
      <div className="mb-4">
        <Label htmlFor={confirmationPasswordInputId} className="mb-2">
          パスワードの確認
        </Label>
        <InputPassword
          {...register("confirmationPassword", {
            required: "確認用パスワードが入力されていません",
            validate: {
              message: (value, formValues) =>
                value === formValues.password || "パスワードが一致していません",
            },
          })}
          id={confirmationPasswordInputId}
          hasError={!!errors.confirmationPassword}
          aria-errormessage={confirmationPasswordErrorMessageId}
          maxLength={32}
          required
        />
        {!!errors.confirmationPassword?.message && (
          <ErrorMessage
            id={confirmationPasswordErrorMessageId}
            message={errors.confirmationPassword.message}
            className="mt-2"
          />
        )}
      </div>
      <SubmitButton disabled={isSubmitting}>登録</SubmitButton>
    </form>
  );
};
