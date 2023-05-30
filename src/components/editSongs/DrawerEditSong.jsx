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
import useSongEdit from "../../hooks/useSongEdit";

export default function DrawerExample({ song, idPlaylist }) {
  //   const { isOpen, onClose, song, addSongToPlaylist, updateSong } =
  //     useContext(GlobalContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const editSong = useSongEdit(onClose, idPlaylist);
  return (
    <DrawerGeneral
      name="Create / Update user"
      data={song}
      isOpen={isOpen}
      onClose={onClose}
      onClick={(form) => editSong.mutate(form)}
    />
  );
}
