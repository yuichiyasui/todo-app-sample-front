import { Metadata } from "next";

import { Form } from "./form";

import { TextLink } from "@/components/link";
import { PageTitle } from "@/components/page-title";

export const metadata: Metadata = {
  title: "ログイン",
};

export default function SignIn() {
  return (
    <main className="p-4">
      <section className="max-w-md mx-auto mb-4 border border-gray-300 bg-white rounded p-4">
        <PageTitle title="ログイン" className="mb-4" />
        <Form />
        <p className="text-center mt-6">
          <TextLink href="/sign-up">ユーザー登録</TextLink>
        </p>
      </section>
    </main>
  );
}
