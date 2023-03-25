import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "タスク一覧",
};

export default function Home() {
  // TODO: if user has signed in, show todo list
  redirect("/sign-in");
}
