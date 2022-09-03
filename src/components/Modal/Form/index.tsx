import React from "react";
import { SelectUI } from "components/CustomUI";
import ModalUI from "..";
import { Button } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Form = ({ isOpen, onClose }: Props) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      heading="Maintenance Input"
      headingColor="#000"
    >
      <SelectUI label="Location" />
      <SelectUI label="Equipment" />
      <SelectUI label="Equipment Type" />
      <SelectUI label="Status" />

      <Button my="20px" w="full" bg="green.400">
        Submit
      </Button>
    </ModalUI>
  );
};

export default Form;
