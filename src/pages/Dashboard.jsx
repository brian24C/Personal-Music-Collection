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
import GlobalContext from "../context/GlobalWrapper";
import EditPlaylist from "../components/editSongs/EditPlaylist";
import Wrapper from "../context/GlobalWrapper";
import apiClient from "../services/api-client";
import { useContext } from "react";

export default function Dashboard() {
  //const { getPlaylists, playlists } = useContext(GlobalContext);
  const [IdPlaylist, setIdPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiClient
      .get(`/playlist`)
      .then(({ data }) => {
        setPlaylists(data.data);
      })
      .catch((err) => {
        console.log("error: " + err);
        console.log(err.reponse.data);
      });
  }, []);

  if (IdPlaylist != null)
    return (
      <Wrapper>
        <EditPlaylist playlist={playlists} idPlaylist={IdPlaylist} />
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
                  onClick={() => setIdPlaylist(playlist.id)}
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
