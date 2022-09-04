import { ButtonUI, MultiSelectUI } from "components/CustomUI";
import { FC } from "react";
import { DropDownIcon } from "svgIcons";
import { Box, useDisclosure } from "@chakra-ui/react";
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
      <MultiSelectUI isMulti={true} data={[]} />
      <Box mt="30px">
        <ButtonUI title="Open Modal" onClick={handleModal} />
      </Box>
      <TableCompoment />
      <Form {...formModalDisclosure} />
    </>
  );
};

export default App;
