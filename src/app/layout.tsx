import { Metadata } from "next";

import { Header } from "@/components/header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Todo App",
    template: "%s | Todo App",
  },
  description: "タスク管理アプリケーション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
