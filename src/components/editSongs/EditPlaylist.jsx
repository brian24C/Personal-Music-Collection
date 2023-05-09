import {
  Box,
  Button,
  Container,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Row from "./Row";
import DrawerExample from "./DrawerExample";
import React from "react";
import { GlobalContext } from "../context/GlobalWrapper";
export default function EditPlaylist({ songs, idSong }) {
  //const btnRef = React.useRef();
  const { onOpen, isOpen, onClose } = useContext(GlobalContext);
  return (
    <div className="EditPlaylist">
      <Container maxW={"full"} p="3" fontSize={"18px"}>
        <Box rounded="lg" boxShadow="base" p="4">
          <Box mt="2" gap={"2"} mb="3" display={"flex"}>
            <FormControl>
              <Input type="text" />
            </FormControl>
            <Button
              leftIcon={<AiOutlineSearch />}
              colorScheme="teal"
              variant="outline"
              // maxW="300px"
              // minW="150px"
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
