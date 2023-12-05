import { FC } from "react";

interface IProps {
  headerSize: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string | null;
  className?: string;
}

export const Typography: FC<IProps> = ({ headerSize, className, text }) => {
  const tagType = {
    span: () => <span className={className}>{text}</span>,
    p: () => <p className={className}>{text}</p>,
    h1: () => <h1 className={className}>{text}</h1>,
    h2: () => <h2 className={className}>{text}</h2>,
    h3: () => <h3 className={className}>{text}</h3>,
    h4: () => <h4 className={className}>{text}</h4>,
    h5: () => <h5 className={className}>{text}</h5>,
    h6: () => <h6 className={className}>{text}</h6>,
  };

  return tagType[headerSize]();
};
