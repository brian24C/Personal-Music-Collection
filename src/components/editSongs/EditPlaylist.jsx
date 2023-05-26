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
  Heading,
  Highlight,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Row from "./Row";
import DrawerExample from "./DrawerExample";
import React from "react";
import { GlobalContext } from "../../context/GlobalWrapper";
import { useParams } from "react-router-dom";

export default function EditPlaylist() {
  const params = useParams();

  const { onOpen, isOpen, onClose, Search, getSongs, songs } =
    useContext(GlobalContext);

  const [query, setQuery] = useState("");
  useEffect(() => {
    getSongs(params.id);
  }, []);

  const SearchHandler = () => {
    Search(query);
  };

  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container maxW={"full"} p="3" fontSize={"18px"}>
      <Text as="samp" fontSize={30}>
        Playlist Name: {params.name}
      </Text>
      <Box rounded="lg" boxShadow="base" p="4" marginTop={5}>
        <Box mt="2" gap={"2"} mb="3" display={"flex"}>
          <FormControl>
            <Input
              type="text"
              onChange={onchangeHandler}
              onKeyDown={() => {
                if (event.key === "Enter") {
                  SearchHandler();
                }
              }}
            />
          </FormControl>
          <Button
            leftIcon={<AiOutlineSearch />}
            colorScheme="teal"
            variant="outline"
            // maxW="300px"
            // minW="150px"
            onClick={() => SearchHandler()}
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
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Artist</Th>
                <Th>link</Th>
                <Th>recommended by</Th>
              </Tr>
            </Thead>
            <Tbody>
              {songs?.map(({ id, name, link, artist, recommendedBy }) => {
                return (
                  <React.Fragment key={id}>
                    <Row
                      id={id}
                      name={name}
                      link={link}
                      artist={artist}
                      recommended_by={recommendedBy}
                    />
                  </React.Fragment>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <DrawerExample id_playlist={params.id} />
    </Container>
  );
}
