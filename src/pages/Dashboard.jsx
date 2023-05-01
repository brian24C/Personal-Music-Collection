import { EditIcon, ViewIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  console.log(tasks);
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  Av
                </Box>

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
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
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
