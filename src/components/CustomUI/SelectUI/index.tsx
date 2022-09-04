import { FC } from "react";
import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import { DropDownIcon } from "svgIcons";

type Props = { label: string; options: any };

const SelectUI: FC<Props> = ({ label, options }: Props) => {
  return (
    <Box mt="15px">
      <Text textTransform="capitalize">{label}</Text>
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
                <Text>{label}</Text>
                <Box transform={isOpen ? "rotate(180deg)" : ""}>
                  <DropDownIcon />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList w="300px">
              {options.map(({ id, name }: { id: string; name: string }) => (
                <MenuItem key={id}>{name}</MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default SelectUI;
