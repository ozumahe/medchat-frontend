import { FC, ReactNode } from "react";

type Props = {
  title: string;
  Icon?: ReactNode | JSX.Element;
};

const ButtonUI: FC<Props> = ({ title, Icon }: Props) => {
  return (
    <button>
      {title}
      {Icon}
    </button>
  );
};

export default ButtonUI;
