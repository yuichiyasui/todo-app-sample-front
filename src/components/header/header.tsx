import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-b-gray-300 px-4 py-3">
      <Link href="/" className="font-bold text-lg text-stone-700">
        Todo App
      </Link>
    </header>
  );
};
