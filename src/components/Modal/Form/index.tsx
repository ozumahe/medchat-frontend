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
  useToast,
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
  const toast = useToast();

  const [systemTypeId, setSystemTypeId] = useState({
    id: null,
    systemType: "",
  });

  const [equipmentTypeId, setEquipmentTypeId] = useState<{
    id: any;
    equipmentType: "";
  }>({
    id: null,
    equipmentType: "",
  });

  const [sbuId, setSbuId] = useState({
    id: null,
    sub: "",
  });

  const [equipmentId, setEquipmentId] = useState<{
    id: any;
    equipment: string;
  }>({
    id: null,
    equipment: "",
  });

  const [status, setStatus] = useState(null);

  const [locationId, setLocationId] = useState<{ id: any; location: string }>({
    id: null,
    location: "",
  });

  const handleSubmit = () => {
    if (!locationId.id || !equipmentId.id || !equipmentTypeId.id) {
      return toast({
        status: "error",
        description: "provide reqiued Inputs",
        duration: 2000,
        position: "top",
      });
    }

    setIsRequest(true);

    setTimeout(() => {
      setIsRequest(false);
      onClose();
    }, 2000);
  };

  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      heading="Maintenance Input"
      headingColor="#000"
    >
      {/* <SelectUI label="Location" options={location} /> */}
      {/* <SelectUI label="Equipment" /> */}
      {/* <SelectUI label="Equipment Type" /> */}
      {/* <SelectUI label="Status" /> */}
      <Box mt="15px">
        <Text textTransform="capitalize">Location</Text>
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
                    {locationId.location ? locationId.location : "Location"}
                  </Text>
                  <Box transform={isOpen ? "rotate(180deg)" : ""}>
                    <DropDownIcon />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList w="300px">
                {location.map(({ id, name }: { id: string; name: string }) => (
                  <MenuItem
                    key={id}
                    onClick={() => setLocationId({ id: id, location: name })}
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
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
                  <Text>
                    {equipmentTypeId.equipmentType
                      ? equipmentTypeId.equipmentType
                      : "Equipment Type"}
                  </Text>
                  <Box transform={isOpen ? "rotate(180deg)" : ""}>
                    <DropDownIcon />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList w="300px">
                {equipmentType.map(({ id, systemType }: any) => (
                  <MenuItem
                    key={id}
                    onClick={() =>
                      setEquipmentTypeId({ id, equipmentType: systemType.name })
                    }
                  >
                    {systemType.name}
                  </MenuItem>
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
