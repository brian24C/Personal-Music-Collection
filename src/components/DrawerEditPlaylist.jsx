import { EditIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";

import useEditPlaylist from "../hooks/useEditPlaylist";
import DrawerGeneralCreate from "./DrawerGeneral";
function DrawerEditPlaylist({ playlist }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editPlaylist = useEditPlaylist(onClose);

  return (
    <>
      <Button
        variant="ghost"
        _hover={{ backgroundColor: "#E4EEF0" }}
        leftIcon={<EditIcon />}
        onClick={onOpen}
      >
        Edit
      </Button>
      <DrawerGeneralCreate
        name="Edit Playlist"
        data={playlist}
        isOpen={isOpen}
        onClose={onClose}
        onClick={(form) => editPlaylist.mutate(form)}
      />
    </>
  );
}

export default DrawerEditPlaylist;
