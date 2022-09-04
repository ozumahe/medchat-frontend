import React, { FC, Key } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  chakra,
} from "@chakra-ui/react";

type Props = {};

const TableCompoment: FC<Props> = ({}: Props) => {
  const tableHead = [
    "Date",
    "Eqiupment Id",
    "Location",
    "SBU",
    "Equipment",
    "Status",
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableHead.map((d, i: Key) => (
              <Th key={i}>{d}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>Location 3</Td>
            <Td>Sbu 3</Td>
            <Td>millimetres (mm)</Td>
            <Td>
              <chakra.button
                bg="green.100"
                py="6px"
                px="10px"
                borderRadius="8px"
                borderColor="green.500"
                color="green.500"
                borderWidth="2px"
              >
                avaliable
              </chakra.button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCompoment;
