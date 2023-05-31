import { Button, useDisclosure } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import useSongAdd from "../../hooks/useSongAdd";
import DrawerGeneral from "../DrawerGeneral";
import DrawerGeneralCreate from "../DrawerGeneralCreate";

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
      <DrawerGeneralCreate
        name="Create Song"
        data={{
          name: "",
          link: "",
          artist: "",
          recommendedBy: "",
        }}
        isOpen={isOpen}
        onClose={onClose}
        onClick={(form) => {
          createSong.mutate(form);
          onClose();
        }}
      />
    </>
  );
}
