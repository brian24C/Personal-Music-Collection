import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import usePlaylists from "../hooks/usePlaylists";
import useDeletePlaylist from "../hooks/useDeletePlaylist";

export default function Dashboard() {
  const { data: playlists, isLoading, error } = usePlaylists();
  const deletePlaylist = useDeletePlaylist();

  if (isLoading === true)
    return (
      <Center h="50%">
        <Spinner size="xl" />
      </Center>
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
                <NavLink
                  to={`/playlist/${playlist.name}/idPlaylist/${playlist.id}`}
                >
                  <Button variant="ghost" leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                </NavLink>
                <Button
                  variant="ghost"
                  onClick={() =>
                    deletePlaylist.mutate({
                      playlistId: playlist.id,
                      name: playlist.name,
                    })
                  }
                  leftIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Editar
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
