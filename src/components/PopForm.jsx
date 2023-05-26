import FocusLock from "react-focus-lock";
import React from "react";
import { useState, useEffect, useRef } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  Box,
  Stack,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Input,
  IconButton,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";
import useEditPlaylist from "../hooks/useEditPlaylist";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} onChange={props.onChange} {...props} />
    </FormControl>
  );
});

// 2. Create the form
const Form = ({ playlist, firstFieldRef, onCancel }) => {
  const editPlaylist = useEditPlaylist();
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
        label="First name"
        id="first-name"
        ref={firstFieldRef}
        onChange={onChangeHandler}
        defaultValue={form.name}
        name="name"
        value={form?.name || ""}
      />
      <TextInput
        label="Last name"
        id="last-name"
        defaultValue={form.CreatedBy}
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

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverForm = ({ playlist }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button variant="ghost" leftIcon={<EditIcon />}>
            Edit
          </Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form
              playlist={playlist}
              firstFieldRef={firstFieldRef}
              onCancel={onClose}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverForm;
