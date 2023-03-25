import clsx from "clsx";
import NextLink from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof NextLink>;

export const TextLink = ({ children, ...props }: Props) => {
  return (
    <NextLink
      {...props}
      className={clsx("link", "link-info", "link-hover", props.className)}
    >
      {children}
    </NextLink>
  );
};
