import { Avatar, Box, Button, Td, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalWrapper";
const Row = ({ id, name, link, artist, recommended_by }) => {
  const { onOpen } = useContext(GlobalContext);

  return (
    <Tr>
      <Td>
        <Avatar name={name} />
      </Td>
      <Td>{name}</Td>
      <Td>{artist}</Td>
      <Td>{link}</Td>
      <Td>{recommended_by}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={"blue"} onClick={onOpen}>
            <AiFillEdit />
          </Button>
          <Button colorScheme={"red"}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default Row;
