import Image from "next/image";
import NextLink from "next/link";

export default function Top() {
  return (
    <main className="max-w-screen-md mx-auto flex-auto flex">
      <div className="hero my-auto">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Todo App</h1>
            <Image
              width={200}
              height={200}
              src="/747.png"
              alt=""
              className="mx-auto md:w-[300px] mb-4 md:mb-8"
            />
            <p className="mb-8 md:mb-12 text-lg inline-block md:text-3xl bg-[linear-gradient(to_top,#f472b6,#f472b6_12px,transparent_12px)]">
              タスク管理アプリケーション
            </p>
            <div>
              <NextLink
                href="/sign-in"
                className="btn btn-primary md:btn-lg md:text-xl"
              >
                使ってみる
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
