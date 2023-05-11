import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import apiClient from "../services/api-client";
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState({});
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
}
