import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Wrapper from "./context/GlobalWrapper";
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";
const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2977f2",
    600: "#337df2",
    500: "#4287f5",
  },
};

// const theme = extendTheme({ colors });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Wrapper>
        <App />
      </Wrapper>
    </ChakraProvider>
  </QueryClientProvider>
);
