import React, { FC, Key } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
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
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCompoment;
