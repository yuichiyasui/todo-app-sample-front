import { Metadata } from "next";
import { Form } from "./form";

export const metadata: Metadata = {
  title: "ユーザー登録",
};

export default function SignUp() {
  return (
    <main className="pt-4 px-4">
      <h1 className="text-lg text-center mb-4 font-bold text-stone-700">
        ユーザー登録
      </h1>
      <div className="max-w-sm mx-auto">
        <Form />
      </div>
    </main>
  );
}
