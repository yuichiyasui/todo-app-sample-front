import clsx from "clsx";

type Props = {
  id: string;
  className?: string;
  message: string;
};

export const ErrorMessage = (props: Props) => {
  return (
    <p
      id={props.id}
      aria-live="polite"
      className={clsx("text-red-500", "text-sm", props.className)}
    >
      {props.message}
    </p>
  );
};
