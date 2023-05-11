import { createContext, useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import apiClient from "../services/api-client";
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState({});
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [songsFilter, setSongsFilter] = useState([]);

  const toast = useToast();
  const getSongs = () => {
    apiClient
      .get("/song")
      .then(({ res }) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Search = (query) => {
    if (query === "") {
      setSongsFilter(users);
    } else {
      const resultSearch = songs.filter((song) => {
        if (song.name.toString().toLowerCase().incudes(query.toLowerCase())) {
          return song;
        }
      });

      setSongsFilter(resultSearch);
    }
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

  const addSong = (form, setForm) => {
    axios
      .post("/song", form)
      .then((res) => {
        setUsers([...songs, res.data]);
        toast({
          title: "Song Added",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const FindOne = (id) => {
    apiClient
      .get(`/song/${id}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const updateSong = (form, setForm, id) => {
    axios
      .put(`/song/${id}`, form)
      .then((res) => {
        toast({
          title: "User Updated",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
        getSongs();
        //Probar esto luego:
        //setSongs(songs.map((song) => song.id===id ? res.data : song))
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };
}
