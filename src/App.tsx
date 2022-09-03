import { ButtonUI, MultiSelectUI } from "components/CustomUI";
import ModalUI from "components/Modal";
import { FC } from "react";
import { DropDownIcon } from "svgIcons";
import "./App.css";
import { useDisclosure } from "@chakra-ui/react";
import Form from "components/Modal/Form";

interface Props {}

const App: FC<Props> = ({}: Props) => {
  const formModalDisclosure: any = useDisclosure();

  const handleModal = () => {
    formModalDisclosure.onOpen();
  };

  return (
    <>
      <ButtonUI title="Button" Icon={<DropDownIcon />} />
      <MultiSelectUI isMulti={true} data={[]} />
      <ButtonUI title="Open Modal" onClick={handleModal} />
      <Form {...formModalDisclosure} />
    </>
  );
};

export default App;
