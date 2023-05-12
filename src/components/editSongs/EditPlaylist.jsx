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
import { GlobalContext } from "../../context/GlobalWrapper";
export default function EditPlaylist({ playlist, idPlaylist }) {
  //const btnRef = React.useRef();
  console.log("j");
  const { onOpen, isOpen, onClose, Search, getSongs, songs } =
    useContext(GlobalContext);

  const [query, setQuery] = useState("");
  useEffect(() => {
    getSongs(idPlaylist);
  }, []);

  const SearchHandler = () => {
    Search(query);
  };

  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="EditPlaylist">
      <Container maxW={"full"} p="3" fontSize={"18px"}>
        <Box rounded="lg" boxShadow="base" p="4">
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
        <DrawerExample id_playlist={idPlaylist} />
      </Container>
    </div>
  );
}
