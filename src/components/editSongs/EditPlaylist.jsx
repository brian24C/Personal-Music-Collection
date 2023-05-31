import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Skeleton,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Stack,
  Td,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useSongSearch from "../../hooks/useSongSearch";
import useSongs from "../../hooks/useSongs";
import DrawerCreateSong from "./DrawerCreateSong";
import Row from "./Row";

export default function EditPlaylist() {
  const params = useParams();
  const queryClient = useQueryClient();
  const { data: songs, isLoading, error } = useSongs(params.id);
  const songsSearch = useSongSearch(params.id);
  const [songStatic, setSongStatic] = useState(songs);

  const SearchHandler = () => {};
  useEffect(() => {
    return () => {
      queryClient.invalidateQueries(["songs", params.id]); // Restablecer los datos en la caché de React Query
    };
  }, []);
  const onchangeHandler = (e) => {
    if (!songStatic) {
      songsSearch.mutate({ search: e.target.value, songStatic: songs });
      setSongStatic(songs);
      console.log("entra if");
    } else {
      songsSearch.mutate({ search: e.target.value, songStatic });
      console.log("entra else");
    }
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
                  <Td>
                    <Skeleton height="20px" width="20px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" width="60px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" width="60px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" width="60px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" width="60px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" width="20px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" width="20px" />
                  </Td>
                </Tr>
              ) : (
                songs?.map(({ id = 0, name, link, artist, recommendedBy }) => {
                  return (
                    <React.Fragment key={id}>
                      <Row
                        id={id}
                        name={name}
                        link={link}
                        artist={artist}
                        recommended_by={recommendedBy}
                        idPlaylist={params.id}
                      />
                    </React.Fragment>
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
