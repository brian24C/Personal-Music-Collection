import { ViewIcon } from "@chakra-ui/icons";
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

import { NavLink } from "react-router-dom";
import AlertDeleteSong from "../components/AlertDeleteSong";
import DrawerEditPlaylist from "../components/DrawerEditPlaylist";
import useDeletePlaylist from "../hooks/useDeletePlaylist";
import usePlaylists from "../hooks/usePlaylists";
import PlaylistCardSkeleton from "../components/PlaylistCardSkeleton";
export default function Dashboard() {
  const { data: playlists, isLoading, error } = usePlaylists();
  const deletePlaylist = useDeletePlaylist();
  const { colorMode } = useColorMode();
  const skeletons = [1, 2, 3, 4, 5, 6];

  error && console.log(error);

  return (
    <>
      <SimpleGrid spacing={10} minChildWidth="300px">
        {isLoading === true
          ? skeletons.map((skeleton) => <PlaylistCardSkeleton key={skeleton} />)
          : playlists.map((playlist) => (
              <Card
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                }}
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
                    <Button
                      variant="ghost"
                      leftIcon={<ViewIcon />}
                      _hover={{ backgroundColor: "#E4EEF0" }}
                    >
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

                  <DrawerEditPlaylist playlist={playlist} />
                  {/* <PopoverForm playlist={playlist} /> */}
                </CardFooter>
              </Card>
            ))}
      </SimpleGrid>
    </>
  );
}
