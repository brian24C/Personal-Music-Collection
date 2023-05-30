import {
  Avatar,
  Box,
  Button,
  Td,
  Tr,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalWrapper";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useSongsDelete from "../../hooks/useSongsDelete";
import DrawerEditSong from "./DrawerEditSong";
const Row = ({ id, name, link, artist, recommended_by, idPlaylist }) => {
  const deleteSong = useSongsDelete();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("row");

  return (
    <>
      <Tr>
        <Td>
          <Avatar name={name} />
        </Td>
        <Td>{name}</Td>
        <Td>{artist}</Td>
        <Td>
          <Link href={link} isExternal>
            open <ExternalLinkIcon mx="2px" />
          </Link>
        </Td>
        <Td>{recommended_by}</Td>
        <Td>
          <Box display="flex" gap="1">
            <Button
              colorScheme={"blue"}
              onClick={() => {
                onOpen();
              }}
            >
              <AiFillEdit />
            </Button>
            <Button
              colorScheme={"red"}
              onClick={() => deleteSong.mutate({ idSong: id, idPlaylist })}
            >
              <AiFillDelete />
            </Button>
          </Box>
        </Td>
      </Tr>
      <DrawerEditSong
        song={{ id, name, link, artist, recommendedBy: recommended_by }}
        idPlaylist={idPlaylist}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Row;
