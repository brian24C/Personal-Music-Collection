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
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const [idSong, setIdSong] = useState(null);
  const tasks = useLoaderData();

  if (idSong != null)
    return (
      <Wrapper>
        <EditPlaylist songs={tasks} idSong={idSong} />
      </Wrapper>
    );
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="green.300"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>

                  <Text>By: {task.author}</Text>
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
                  onClick={() => setIdSong(task.id)}
                >
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<DeleteIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
