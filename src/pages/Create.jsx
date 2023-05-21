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
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import useAddPlaylist from "../hooks/useAddPlaylist";

export default function Create() {
  const [playlist, setPlaylist] = useState({
    namePlaylist: "",
    createdBy: "",
  });

  const addPlaylist = useAddPlaylist(() => {
    setPlaylist({ namePlaylist: "", createdBy: "" });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlaylist.mutate({
      name: playlist.namePlaylist,
      CreatedBy: playlist.createdBy,
    });
  };
  return (
    <Box maxW="480px">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="40px">
          <FormLabel>Playlist name:</FormLabel>
          <Input
            value={playlist.namePlaylist}
            type="text"
            name="name"
            onChange={(event) =>
              setPlaylist({
                ...playlist,
                namePlaylist: event.target.value,
              })
            }
          />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Created By:</FormLabel>
          <Input
            onChange={(event) =>
              setPlaylist({ ...playlist, createdBy: event.target.value })
            }
            name="createdBy"
          />
          <FormHelperText>Enter a who created this playlist...</FormHelperText>
        </FormControl>

        {/* <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="blue" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task
          </FormLabel>
        </FormControl> */}

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

// export const createAction = async ({ request }) => {
//   const data = await request.formData();

//   const playlist = {
//     name: data.get("name"),
//   };

//   fetch("https://api-playlist.onrender.com/api/v1/playlist", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(playlist),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       window.location.reload();
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

//   return redirect("/");
// };
