import React from "react";
import ModalUI from "..";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Form = ({ isOpen, onClose }: Props) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      heading="Hello"
      headingColor="#000"
    >
      Form
    </ModalUI>
  );
};

export default Form;
