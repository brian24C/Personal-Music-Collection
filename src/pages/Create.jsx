import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import useAddPlaylist from "../hooks/useAddPlaylist";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [playlist, setPlaylist] = useState({
    namePlaylist: "",
    createdBy: "",
  });

  const addPlaylist = useAddPlaylist(() => {
    setPlaylist({ namePlaylist: "", createdBy: "" });
  });

  const navigate = useNavigate();

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
            value={playlist.createdBy}
            onChange={(event) =>
              setPlaylist({ ...playlist, createdBy: event.target.value })
            }
            name="createdBy"
          />
          <FormHelperText>Enter who created this playlist...</FormHelperText>
        </FormControl>

        {/* <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="blue" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task
          </FormLabel>
        </FormControl> */}

        <Button colorScheme="green" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
