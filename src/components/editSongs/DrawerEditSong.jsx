import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalWrapper";
import InputsGroup from "./InputsGroup";
import DrawerGeneral from "../DrawerGeneral";

export default function DrawerExample({ song }) {
  //   const { isOpen, onClose, song, addSongToPlaylist, updateSong } =
  //     useContext(GlobalContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DrawerGeneral
      name="Create / Update user"
      data={song}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}
