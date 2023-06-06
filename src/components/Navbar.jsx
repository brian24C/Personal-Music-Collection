import { Avatar, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import apiClient from "../services/api-client";
import useImageStore from "./store";

const Navbar = () => {
  const setData = useImageStore((s) => s.setData);
  const url = useImageStore((s) => s.imageData.url);
  useEffect(() => {
    const fetchImage = async () => {
      //const url = "http://127.0.0.1:9001/api/v1/image/load";
      const { data } = await apiClient.get("/image/load");

      setData({
        url: data.dataTotal[0]?.url,
        filename: data.dataTotal[0]?.filename,
      });
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
  );
};

export default Navbar;
