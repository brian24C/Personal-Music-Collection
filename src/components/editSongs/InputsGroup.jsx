import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { GlobalContext } from "../../context/GlobalWrapper";

const InputsGroup = ({ name, onChangeHandler, value }) => {
  return (
    <FormControl>
      <FormLabel>{name}</FormLabel>
      <Input type="text" name={name} onChange={onChangeHandler} value={value} />
      {/* {errors &&
        errors?.map((err) => {
          return <FormErrorMessage>{err}</FormErrorMessage>;
        })} */}
    </FormControl>
  );
};

export default InputsGroup;
