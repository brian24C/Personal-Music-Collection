import { DeleteIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AlertDelete from "../AlertDelete";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
function AlertDeleteSong({ onDelete, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        <AiFillDelete />
      </Button>

      <AlertDelete
        isOpen={isOpen}
        onClose={onClose}
        onDelete={onDelete}
        name={name}
        nameHeader="Delete Song"
        descriptionBody="Are you sure you want to delete this song?"
      />
    </>
  );
}

export default AlertDeleteSong;
