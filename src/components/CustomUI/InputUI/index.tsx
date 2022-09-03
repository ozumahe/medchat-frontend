import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {
  label: string;
  placeholder: string;
  isRequired: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<Props> = ({
  isRequired,
  label,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    // <Box justifySelf="center">
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        h="70px"
        borderRadius="10px"
        bg="#fff"
      />
    </FormControl>
    // </Box>
  );
};

export default FormInput;
