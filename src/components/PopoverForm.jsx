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
import Form from "./PopForm";
import TextInput from "./PopTextInput";
// 2. Create the form

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
          <Button
            variant="ghost"
            _hover={{ backgroundColor: "#E4EEF0" }}
            leftIcon={<EditIcon />}
          >
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
