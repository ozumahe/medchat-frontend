import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  Icon?: ReactNode | JSX.Element;
  onClick?: () => void;
};

const ButtonUI: FC<Props> = ({ title, Icon, onClick }: Props) => {
  return (
    <Button rightIcon={<span>{Icon}</span>} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonUI;
