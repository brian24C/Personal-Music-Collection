import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Input,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useSongSearch from "../../hooks/useSongSearch";
import useSongs from "../../hooks/useSongs";
import DrawerCreateSong from "./DrawerCreateSong";
import Row from "./Row";
import useSongStore from "../store";
import useSongsStatic from "../../hooks/useSongsStatic";
import { useQuery } from "@tanstack/react-query";

export default function EditPlaylist() {
  const toast = useToast();
  const params = useParams();
  const queryClient = useQueryClient();
  const { data: songs, isLoading, error } = useSongs(params.id);
  const songsSearch = useSongSearch(params.id);
  const [isSecondRender, setIsSecondRender] = useState(false);
  const { data: songsStatic } = useSongsStatic(params.id);
  //const { data: dataPrueba } = useQuery(["songs", filter]);

  console.log("songs", songs);
  console.log("songStatic", songsStatic);
  useEffect(() => {
    return () => {
      queryClient.invalidateQueries(["songs", params.id]);
    };
  }, []);

  useEffect(() => {
    if (
      isSecondRender &&
      songs?.length === 0 &&
      (songsStatic?.length === 0 || !songsStatic)
    ) {
      toast({
        title: "There are no songs in this playlist",
        description: "Add your favorite songs.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }

    if (
      isSecondRender &&
      songs?.length === 0 &&
      songsStatic?.length != 0 &&
      songsStatic != null
    ) {
      toast({
        title: "that song is not found",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    }
    setIsSecondRender(true);
  }, [songs]);

  const onchangeHandler = (e) => {
    // if (!songStatic || songStatic.length === 0) {
    //   songsSearch.mutate({ search: e.target.value, songStatic: songs });
    //   setSongStatic(songs);
    // } else {}
    console.log("onchangehandler", songsStatic);
    songsSearch.mutate({ search: e.target.value, songsStatic });
  };

  return (
    <Container maxW={"full"} p="3" fontSize={"18px"}>
      <Text as="samp" fontSize={30}>
        Playlist Name: {params.name}
      </Text>
      <Box rounded="lg" boxShadow="base" p="4" marginTop={5}>
        <Box mt="2" gap={"2"} mb="3" display={"flex"}>
          <FormControl>
            <Input type="text" onChange={onchangeHandler} />
          </FormControl>
          <Button
            leftIcon={<AiOutlineSearch />}
            colorScheme="teal"
            variant="outline"
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
          <DrawerCreateSong idPlaylist={params.id} />
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
              {isLoading === true ? (
                <Tr>
                  <Td colSpan={5}>
                    <Center>
                      <Spinner size="xl" />
                    </Center>
                  </Td>
                </Tr>
              ) : (
                songs?.map(({ id = 0, name, link, artist, recommendedBy }) => {
                  return (
                    <Row
                      key={id}
                      id={id}
                      name={name}
                      link={link}
                      artist={artist}
                      recommended_by={recommendedBy}
                      idPlaylist={params.id}
                    />
                  );
                })
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
