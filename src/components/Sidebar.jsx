import { AtSignIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <Flex alignItems="center">
            <ListIcon as={CalendarIcon} color="white" />
            <span>Dashboard</span>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="/create">
          <Flex alignItems="center">
            <ListIcon as={AddIcon} color="white" />
            <Text noOfLines={1}>New Playlist</Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
