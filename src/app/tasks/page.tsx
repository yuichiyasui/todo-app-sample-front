import clsx from "clsx";
import { Metadata } from "next";

import { PageTitle } from "@/components/page-title";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "タスク一覧",
};

type Task = {
  id: string;
  title: string;
};

const TaskRow = ({ task }: { task: Task }) => {
  return (
    <li className="bg-white shadow-sm">
      <button type="button" className="block py-3 px-4 h-full w-full text-left">
        {task.title}
      </button>
    </li>
  );
};

const TaskPanel = ({
  title,
  tasks,
  className,
}: {
  title: string;
  tasks: Task[];
  className?: string;
}) => {
  return (
    <section className={clsx(className)}>
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <ul className="flex flex-col gap-y-px mb-2">
        {tasks.map((task) => {
          return <TaskRow key={task.id} task={task} />;
        })}
      </ul>
      <button type="button" className="btn btn-xs">
        タスクを追加する
      </button>
    </section>
  );
};

export default function Home() {
  // TODO: fetch tasks from API

  // TODO: if user is not authenticated, redirect to sign-in page
  // redirect("/sign-in");

  // dummy data
  const todoList = [
    {
      id: "1",
      title: "買い物に行く",
    },
    {
      id: "2",
      title: "買い物に行く2",
    },
  ];

  return (
    <>
      <main className="max-w-screen-xl w-full mx-auto p-4">
        <PageTitle title="タスク一覧" className="mb-4" />

        <div className="md:grid md:grid-cols-3 md:gap-x-10">
          <TaskPanel title="Todo" tasks={todoList} className="mb-6 md:mb-0" />
          <TaskPanel
            title="In Progress"
            tasks={todoList}
            className="mb-6 md:mb-0"
          />
          <TaskPanel title="Done" tasks={todoList} className="mb-6 md:mb-0" />
        </div>
      </main>
    </>
  );
}
