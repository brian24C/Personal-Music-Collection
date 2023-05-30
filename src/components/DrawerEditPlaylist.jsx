import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import DrawerGeneral from "./DrawerGeneral";
import useEditPlaylist from "../hooks/useEditPlaylist";
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
      <DrawerGeneral
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
