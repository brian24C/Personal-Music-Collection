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
import useSongAdd from "../../hooks/useSongAdd";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

export default function DrawerCreateSong({ idPlaylist }) {
  //   const { isOpen, onClose, song, addSongToPlaylist, updateSong } =
  //     useContext(GlobalContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const createSong = useSongAdd(idPlaylist);
  return (
    <>
      <Button
        colorScheme="teal"
        variant="outline"
        maxW={"300px"}
        minW="150px"
        leftIcon={<AiOutlinePlus fontSize={"20px"} />}
        onClick={onOpen}
      >
        Add Song
      </Button>
      <DrawerGeneral
        name="Create Song"
        data={{
          name: "",
          link: "",
          artist: "",
          recommendedBy: "",
        }}
        isOpen={isOpen}
        onClose={onClose}
        onClick={(form) => createSong.mutate(form)}
      />
    </>
  );
}
