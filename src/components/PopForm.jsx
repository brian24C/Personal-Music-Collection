import React, { useState } from "react";
import FocusLock from "react-focus-lock";

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";
import useEditPlaylist from "../hooks/useEditPlaylist";
import TextInput from "./PopTextInput";

const Form = ({ playlist, firstFieldRef, onCancel }) => {
  const editPlaylist = useEditPlaylist(onCancel);
  const [form, setForm] = useState(playlist);
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log("palylist", form);

  return (
    <Stack spacing={4}>
      <TextInput
        label="Name"
        ref={firstFieldRef}
        onChange={onChangeHandler}
        name="name"
        value={form?.name || ""}
      />
      <TextInput
        label="Created By:"
        onChange={onChangeHandler}
        name="CreatedBy"
        value={form?.CreatedBy || ""}
      />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button
          variant="outline"
          onClick={() => {
            onCancel();
            setForm(playlist);
          }}
        >
          Cancel
        </Button>
        <Button colorScheme="teal" onClick={() => editPlaylist.mutate(form)}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Form;
