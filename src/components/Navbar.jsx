import { UnlockIcon } from "@chakra-ui/icons";

import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Succesfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">My PlayList</Heading>

      <Spacer />
      <HStack spacing="20px">
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text>Dark Mode</Text>
        <Avatar src="img/mari.png" bg="blue.200" name="b">
          {/* <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge> */}
        </Avatar>
        <Text>Brian Castro</Text>
        <Button colorScheme="blue" onClick={showToast}>
          logout
        </Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red" textAlign="center">1</Box>
    //     <Box w="150px" h="50px" bg="blue" textAlign="center">2</Box>
    //     <Box w="150px" h="50px" bg="green" flexGrow="1" textAlign="center">3</Box>
    //     <Box w="150px" h="50px" bg="yellow" flexGrow="2" textAlign="center">4</Box>
    // </Flex>
  );
};

export default Navbar;
