import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Link,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import useSongEdit from "../../hooks/useSongEdit";
import useSongsDelete from "../../hooks/useSongsDelete";
import DrawerGeneral from "../DrawerGeneral";
import AlertDeleteSong from "./AlerDeleteSong";
const Row = ({ id = 0, name, link, artist, recommended_by, idPlaylist }) => {
  const deleteSong = useSongsDelete();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editSong = useSongEdit(onClose, idPlaylist);

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
              colorScheme="blue"
              onClick={() => {
                onOpen();
              }}
            >
              <AiFillEdit />
            </Button>

            <AlertDeleteSong
              onDelete={() => deleteSong.mutate({ idSong: id, idPlaylist })}
              name={name}
            />
          </Box>
        </Td>

        <Td>
          <React.Fragment>
            <DrawerGeneral
              name="Edit Song"
              data={{ id, name, link, artist, recommendedBy: recommended_by }}
              isOpen={isOpen}
              onClose={onClose}
              onClick={(form) => editSong.mutate(form)}
            />
          </React.Fragment>
        </Td>
      </Tr>
    </>
  );
};

export default Row;
