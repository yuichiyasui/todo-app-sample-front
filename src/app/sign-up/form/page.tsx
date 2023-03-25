import { Metadata } from "next";

import { Form } from "./form";

import { PageTitle } from "@/components/page-title";

export const metadata: Metadata = {
  title: "ユーザー情報の登録",
};

export default function SignUpForm() {
  return (
    <main className="p-4">
      <section className="max-w-md mx-auto border border-gray-300 bg-white rounded p-4">
        <PageTitle title="ユーザー情報の登録" className="mb-4" />
        <Form />
      </section>
    </main>
  );
}
