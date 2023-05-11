import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import apiClient from "../services/api-client";
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState({});
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    axios
      .post(`/song/${id}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };
}
