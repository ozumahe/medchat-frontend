import { ButtonUI, SelectUI } from "components/CustomUI";
import ModalUI from "components/Modal";
import { FC } from "react";
import { DropDownIcon } from "svgIcons";
import "./App.css";
import { useDisclosure } from "@chakra-ui/react";
import Form from "components/Modal/Form";

interface Props {}

const App: FC<Props> = ({}: Props) => {
  const formModalDisclosure: any = useDisclosure();

  return (
    <div className="">
      <ButtonUI title="Button" Icon={<DropDownIcon />} />
      <SelectUI isMulti={true} data={[]} />

      <Form {...formModalDisclosure} />
    </div>
  );
};

export default App;
