import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  SimpleGrid,
  Text,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../context/GlobalWrapper";
import EditPlaylist from "../components/editSongs/EditPlaylist";
import apiClient from "../services/api-client";

export default function Dashboard() {
  const [idSong, setIdSong] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    apiClient
      .get(`/playlist`)
      .then(({ data }) => {
        console.log("sisi", data.data);
        setPlaylists(data.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  }, []);

  if (idSong != null)
    return (
      <Wrapper>
        <EditPlaylist playlist={playlists} idPlaylist={idSong} />
      </Wrapper>
    );
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {playlists &&
        playlists.map((playlist) => (
          <Card
            key={playlist.id}
            borderTop="8px"
            borderColor="green.300"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5} justify="space-between">
                <Avatar name={playlist.name} />
                <Box>
                  <Heading as="h3" size="sm">
                    {playlist.name}
                  </Heading>
                  <Text>Created By: {playlist.name}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500 ">
              <HStack></HStack>
            </CardBody>

            <Divider borderColor="gray.300" />

            <CardFooter>
              <HStack>
                <Button
                  variant="ghost"
                  leftIcon={<ViewIcon />}
                  onClick={() => setIdSong(playlist.id)}
                >
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
