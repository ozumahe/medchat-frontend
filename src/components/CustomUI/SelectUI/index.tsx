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

type Props = { label: string };

const SelectUI: FC<Props> = ({ label }: Props) => {
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
                <Box>
                  <DropDownIcon />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList w="300px">
              <MenuItem></MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default SelectUI;
