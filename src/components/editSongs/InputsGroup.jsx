import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

const InputsGroup = ({ name, onChangeHandler, value }) => {
  return (
    <FormControl isRequired isInvalid={value === ""}>
      <FormLabel>{name}</FormLabel>
      <Input type="text" name={name} onChange={onChangeHandler} value={value} />
      <FormErrorMessage>enter the {name}</FormErrorMessage>
    </FormControl>
  );
};

export default InputsGroup;
