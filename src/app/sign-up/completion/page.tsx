import { Metadata } from "next";

import { TextLink } from "@/components/link";
import { PageTitle } from "@/components/page-title";

export const metadata: Metadata = {
  title: "ユーザー登録完了",
};

export default function SignUpCompletion() {
  return (
    <main className="p-4">
      <section className="max-w-md mx-auto border border-gray-300 bg-white rounded p-4">
        <PageTitle title="ユーザー登録完了" className="mb-4" />
        <p className="text-center mb-4">登録が完了しました</p>
        <p className="text-center">
          <TextLink href="/sign-in">ログインする</TextLink>
        </p>
      </section>
    </main>
  );
}
