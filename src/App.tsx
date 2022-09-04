import { ButtonUI, MultiSelectUI } from "components/CustomUI";
import { FC } from "react";
import { DropDownIcon } from "svgIcons";
import { useDisclosure } from "@chakra-ui/react";
import Form from "components/Modal/Form";
import "./App.css";
import TableCompoment from "components/Table";

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
      <TableCompoment />
      <Form {...formModalDisclosure} />
    </>
  );
};

export default App;
