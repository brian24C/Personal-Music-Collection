import {
  FormControl,
  Box,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Playlist name:</FormLabel>
          <Input type="text" name="name" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Created By:</FormLabel>
          <Textarea
            placeholder="Enter a who created this playlist..."
            name="description"
          />
        </FormControl>

        {/* <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="blue" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task
          </FormLabel>
        </FormControl> */}

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const playlist = {
    name: data.get("name"),
  };

  fetch("https://api-playlist.onrender.com/api/v1/playlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playlist),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.reload();
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return redirect("/");
};
