"use client";

import { FC, MouseEvent, ReactElement } from "react";

type TPropButton = {
  text?: string;
  children?: ReactElement;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
};

export const Button: FC<TPropButton> = ({
  text,
  children,
  onClick,
  className,
  type,
}) => {
  return (
    <button type={type} className={className && className} onClick={onClick}>
      {children}
      {text}
    </button>
  );
};
