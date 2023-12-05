import { ChangeEvent, FC } from "react";

interface IProps {
  name?: string;
  value?: string | Number | string[] | Date;
  className?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<IProps> = ({ name, onChange, value, className }) => {
  return (
    <textarea
      className={className}
      name={name}
      onChange={onChange}
      value={value?.toString()}
    />
  );
};
