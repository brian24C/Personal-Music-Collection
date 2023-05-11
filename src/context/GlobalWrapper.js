import { createContext, useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import apiClient from "../services/api-client";
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState({});
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const fetchSongs = () => {
    apiClient
      .get("/song")
      .then(({ res }) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const searchSong = (id) => {
    apiClient
      .post(`/song/${id}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const deleteSong = (id) => {
    apiClient
      .delete(`/song/${id}`)
      .then((res) => {
        setUsers(songs.filter((u) => u.id != id));
        toast({
          title: "Song Deleted",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };
}
