import { UnlockIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/Fa";
import { MdEdit } from "react-icons/md";
import useImageStore from "./store";
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
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiClient from "../services/api-client";
const Navbar = () => {
  const toast = useToast();
  const url = useImageStore((s) => s.url);
  const setUrl = useImageStore((s) => s.setUrl);

  useEffect(() => {
    const fetchImage = async () => {
      //const url = "http://127.0.0.1:9001/api/v1/image/load";
      const { data } = await apiClient.get("/image/load");
      setUrl(data.dataTotal[0]?.url);
    };
    fetchImage();
  }, []);

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize={{ base: "24px", md: "40px", lg: "45px" }}>
        My playlist
      </Heading>

      <Spacer />
      <HStack spacing="20px">
        <NavLink to="/profile">
          <Avatar
            src={!url ? "" : url}
            bg="red.500"
            icon={<AiOutlineUser fontSize="1.5rem" />}
            showBorder="black"
            borderWidth="2px"
          />
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
