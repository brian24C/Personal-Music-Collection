import { UnlockIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/Fa";
import { MdEdit } from "react-icons/md";

import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
  Icon,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Succesfully logged out",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  console.log("toast");
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize={{ base: "24px", md: "40px", lg: "45px" }}>
        My playlist
      </Heading>

      <Spacer />
      <HStack spacing="20px">
        <NavLink to="/profile">
          <Box position="relative" display="inline-block">
            <Avatar
              bg={isHovered ? "white" : "red.500"}
              icon={<AiOutlineUser fontSize="1.5rem" />}
              showBorder="black"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              borderWidth="2px"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              pointerEvents="none"
            >
              {isHovered ? <FaPlusSquare /> : null}
            </Box>
          </Box>
        </NavLink>

        <Text>Brian Castro</Text>
        {/* <Button colorScheme="blue" onClick={showToast}>
          logout
        </Button> */}
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
