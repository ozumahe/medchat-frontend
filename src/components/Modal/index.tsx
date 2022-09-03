import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import React, { FC, ReactFragment, ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  heading: string;
  headingColor: string;
  children: ReactNode | ReactFragment;
  maxW?: string;
};

const ModalUI: FC<Props> = ({
  open,
  onClose,
  maxW,
  children,
  heading,
  headingColor,
}: Props) => {
  return (
    <Modal isCentered isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={maxW}>
        <ModalHeader
          textAlign="center"
          color={headingColor}
          fontWeight="700"
          fontSize="32px"
          mb=""
        >
          {heading}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalUI;
