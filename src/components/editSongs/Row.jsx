import { Avatar, Box, Button, Td, Tr, Link } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalWrapper";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useSongsDelete from "../../hooks/useSongsDelete";
const Row = ({ id, name, link, artist, recommended_by, idPlaylist }) => {
  const { onOpen, FindOne } = useContext(GlobalContext);

  const deleteSong = useSongsDelete();
  console.log("row");

  return (
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
              FindOne(id);
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
  );
};

export default Row;
