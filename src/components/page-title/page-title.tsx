import clsx from "clsx";

type Props = {
  title: string;
  className?: string;
};

export const PageTitle = (props: Props) => {
  return (
    <h1
      className={clsx(
        "text-lg",
        "text-center",
        "font-bold",
        "text-stone-700",
        props.className,
      )}
    >
      {props.title}
    </h1>
  );
};
