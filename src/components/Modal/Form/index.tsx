import React from "react";
import { SelectUI } from "components/CustomUI";
import ModalUI from "..";

import {
  Button,
  Text,
  Menu,
  Box,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { location, equipments, equipmentType } from "data";
import { DropDownIcon } from "svgIcons";
import FormInput from "components/CustomUI/InputUI";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

interface StatusData {
  name: string;
}

const statusData: StatusData[] = [
  {
    name: "",
  },
];

const Form = ({ isOpen, onClose }: Props) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      heading="Maintenance Input"
      headingColor="#000"
    >
      <SelectUI label="Location" options={location} />
      {/* <SelectUI label="Equipment" /> */}
      {/* <SelectUI label="Equipment Type" /> */}
      {/* <SelectUI label="Status" /> */}
      <Box mt="15px">
        <Text textTransform="capitalize">Equipment</Text>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                mt="5px"
                h="70px"
                w="100%"
                border="1px solid gray"
                borderRadius="8px"
                px="20px"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Equipment</Text>
                  <Box transform={isOpen ? "rotate(180deg)" : ""}>
                    <DropDownIcon />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList w="300px">
                {equipments.map(
                  ({ id, equipment }: { id: string; equipment: string }) => (
                    <MenuItem key={id}>{equipment}</MenuItem>
                  )
                )}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      <Box mt="15px">
        <Text textTransform="capitalize">Equipment Type</Text>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                mt="5px"
                h="70px"
                w="100%"
                border="1px solid gray"
                borderRadius="8px"
                px="20px"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Equipment Type</Text>
                  <Box transform={isOpen ? "rotate(180deg)" : ""}>
                    <DropDownIcon />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList w="300px">
                {equipmentType.map(({ id, systemType }: any) => (
                  <MenuItem key={id}>{systemType.name}</MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      <Box mt="15px">
        <Text textTransform="capitalize">Equipment Type</Text>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                mt="5px"
                h="70px"
                w="100%"
                border="1px solid gray"
                borderRadius="8px"
                px="20px"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Equipment Type</Text>
                  <Box transform={isOpen ? "rotate(180deg)" : ""}>
                    <DropDownIcon />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList w="300px">
                {equipmentType.map(({ id, systemType }: any) => (
                  <MenuItem key={id}>{systemType.name}</MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      <FormInput
        // label="Select date"
        onChange={(e) => {}}
        placeholder="Select date"
        value={""}
        isRequired={false}
      />
      <Button my="20px" w="full" bg="green.400">
        Submit
      </Button>
    </ModalUI>
  );
};

export default Form;
