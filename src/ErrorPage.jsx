import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function ErrorPage() {
  const { colorMode } = useColorMode();
  const error = useRouteError();
  return (
    <Grid
      templateColumns="repeat(6,1fr)"
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
    >
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        bg={colorMode === "light" ? "brand.500" : "gray.700"}
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" p="40px" colSpan={{ base: 6, lg: 5, xl: 5 }}>
        <Navbar />
        <Box padding={5}>
          <Heading>Oops...</Heading>
          <Text>
            {" "}
            {isRouteErrorResponse(error)
              ? "This page does not exist"
              : "sorry, an unexpected error has occurred."}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
}
