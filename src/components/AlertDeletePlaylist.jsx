import { DeleteIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AlertDelete from "./AlertDelete";
function AlertDeletePlaylist({ onDelete, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        _hover={{ backgroundColor: "#E4EEF0" }}
        variant="ghost"
        onClick={onOpen}
        leftIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <AlertDelete
        isOpen={isOpen}
        onClose={onClose}
        onDelete={onDelete}
        name={name}
        nameHeader="Delete Playlist"
        descriptionBody="Are you sure? All song with this playlist will be deleted, You
        can't undo this action afterwards."
      />
    </>
  );
}

export default AlertDeletePlaylist;
