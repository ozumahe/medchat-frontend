import React, { useState } from "react";
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
  const [isRequest, setIsRequest] = useState(false);
  const [systemTypeId, setSystemTypeId] = useState(null);
  const [equipmentTypeId, setEquipmentTypeId] = useState(null);
  const [sbuId, setSbuId] = useState(null);
  const [equipmentId, setEquipmentId] = useState<{
    id: any;
    equipment: string;
  }>({
    id: null,
    equipment: "",
  });
  const [status, setStatus] = useState(null);
  const [locationId, setLocationId] = useState(null);

  const handleSubmit = () => {
    setIsRequest(true);

    setTimeout(() => {
      setIsRequest(false);
    }, 2000);
  };

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
                  <Text>
                    {equipmentId.equipment
                      ? equipmentId.equipment
                      : "Equipment"}
                  </Text>
                  <Box transform={isOpen ? "rotate(180deg)" : ""}>
                    <DropDownIcon />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList w="300px">
                {equipments.map(
                  ({ id, equipment }: { id: string; equipment: string }) => (
                    <MenuItem
                      key={id}
                      onClick={() => setEquipmentId({ id: id, equipment })}
                    >
                      {equipment}
                    </MenuItem>
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
      <Flex justifyContent="flex-end">
        <Button my="20px" w="100px" mx="10px">
          Cancel
        </Button>
        <Button
          isLoading={isRequest}
          my="20px"
          w="100px"
          color="#fff"
          bg="green.400"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Flex>
    </ModalUI>
  );
};

export default Form;
