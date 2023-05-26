import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PopoverForm from "../components/PopoverForm";
import { GlobalContext } from "../context/GlobalWrapper";
import useDeletePlaylist from "../hooks/useDeletePlaylist";
import usePlaylists from "../hooks/usePlaylists";
import AlertDeleteSong from "../components/AlertDeleteSong";

export default function Dashboard() {
  const { data: playlists, isLoading, error } = usePlaylists();
  const deletePlaylist = useDeletePlaylist();
  const { colorMode } = useColorMode();
  const { setSongsFilter, setSongs } = useContext(GlobalContext);
  console.log("dashboard");
  useEffect(() => {
    setSongsFilter([]);
    setSongs([]);
  }, []);

  if (isLoading === true)
    return (
      <Center h="50%">
        <Spinner size="xl" />
      </Center>
    );

  error && console.log(error);

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {playlists &&
        playlists.map((playlist) => (
          <Card
            key={playlist.id}
            borderTop="8px"
            borderColor={colorMode === "light" ? "green.300" : "gray.600"}
          >
            <CardHeader>
              <Flex gap={5} justify="space-between">
                <Avatar name={playlist.name} />
                <Box>
                  <Heading as="h3" size="sm">
                    {playlist.name}
                  </Heading>
                  <Text>Created By: {playlist.CreatedBy}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500 ">
              <HStack></HStack>
            </CardBody>

            <Divider borderColor="gray.300" />

            <CardFooter justify="space-between">
              <NavLink
                to={`/playlist/${playlist.name}/idPlaylist/${playlist.id}`}
              >
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
              </NavLink>
              {/* <Button
                variant="ghost"
                onClick={() =>
                  deletePlaylist.mutate({
                    playlistId: playlist.id,
                    name: playlist.name,
                    CreatedBy: playlist.CreatedBy,
                  })
                }
                leftIcon={<DeleteIcon />}
              >
                Delete
              </Button> */}
              <AlertDeleteSong
                deletePlaylist={() =>
                  deletePlaylist.mutate({
                    playlistId: playlist.id,
                    name: playlist.name,
                    CreatedBy: playlist.CreatedBy,
                  })
                }
                playlistName={playlist.name}
              />

              <PopoverForm playlist={playlist} />
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
