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

export default function DrawerEditSong({ song, idPlaylist, isOpen, onClose }) {
  //   const { isOpen, onClose, song, addSongToPlaylist, updateSong } =
  //     useContext(GlobalContext);

  const editSong = useSongEdit(onClose, idPlaylist);
  return (
    <DrawerGeneral
      name="Edit Song"
      data={song}
      isOpen={isOpen}
      onClose={onClose}
      onClick={(form) => editSong.mutate(form)}
    />
  );
}
