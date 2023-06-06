import { AtSignIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Flex,
  Text,
  useColorMode,
  Switch,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "white" : "white",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          <Flex alignItems="center">
            <ListIcon as={CalendarIcon} color="white" />
            Dashboard
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink
          to="/create"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "white" : "white",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          <Flex alignItems="center">
            <ListIcon as={AddIcon} color="white" />
            <Text noOfLines={1}>New Playlist</Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink
          to="/profile"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "white" : "white",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
      <ListItem>
        <HStack>
          <Switch
            colorScheme="green"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <Text>Dark Mode</Text>
        </HStack>
      </ListItem>
    </List>
  );
};

export default Sidebar;
