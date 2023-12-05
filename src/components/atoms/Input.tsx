"use client";
import { ChangeEvent, FC } from "react";

interface IProps {
  type: string;
  value: string | Number | Date | string[];
  placeholder?: string;
  name?: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IProps> = ({
  type,
  value,
  placeholder,
  className,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value.toString()}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  );
};
