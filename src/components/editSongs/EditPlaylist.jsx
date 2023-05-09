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
        <Box mt="5" rounded={"lg"} boxShadow="base">
          <Box p="4" display={"flex"} justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              List Songs
            </Text>
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
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Artist</Th>
                  <Th>link</Th>
                  <Th>recommended by</Th>
                </Tr>
              </Thead>
              <Tbody>
                {songs?.map(({ id, Name, Artist, link, recommended_by }) => {
                  return (
                    <React.Fragment key={id}>
                      <Row
                        id={id}
                        Name={Name}
                        Artist={Artist}
                        link={link}
                        recommended_by={recommended_by}
                      />
                    </React.Fragment>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <DrawerExample />
      </Container>
    </div>
  );
}
