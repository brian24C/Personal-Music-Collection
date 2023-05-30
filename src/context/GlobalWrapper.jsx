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

  // const getSongs = (id) => {
  //   apiClient
  //     .get(`/playlist/${id}`)
  //     .then(({ data }) => {
  //       const Songs = data.dataTotal.songs.map((song) => song.song);
  //       setSongs(Songs);
  //       setSongsFilter(Songs);
  //     })
  //     .catch((err) => {
  //       console.log(err.reponse);
  //     });
  // };

  const Search = (query) => {
    if (query === "") {
      setSongs(songsFilter);
    } else {
      const resultSearch = songsFilter.filter((song) => {
        if (song.name.toString().toLowerCase().includes(query.toLowerCase())) {
          return song;
        }
      });

      setSongs(resultSearch);
    }
  };

  const deleteSong = (id) => {
    apiClient
      .delete(`/song/${id}`)
      .then((res) => {
        setSongs(songs.filter((u) => u.id != id));
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

  const addSongToPlaylist = (form, setForm, idPplaylist) => {
    apiClient
      .post("/song", form)
      .then((resSong) => {
        apiClient
          .post("/playlist/SongsOnPlaylist", {
            id_song: resSong.data.dataTotal.id,
            id_playlist: parseInt(idPplaylist.id_playlist),
          })
          .then((res) => {
            setSongs([...songs, resSong.data.dataTotal]);
            toast({
              title: "Song Added",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            setErrors({});
            setForm({});
            onClose();
          });
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const FindOne = (id) => {
    apiClient
      .get(`/song/${id}`)
      .then((res) => {
        setSong(res.data.dataTotal);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const updateSong = (form, setForm, idSong, idPlaylist) => {
    //console.log({ form, setForm, idSong, idPlaylist });
    apiClient
      .put(`/song/${idSong}`, form)
      .then((res) => {
        toast({
          title: "Song Updated",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
        //getSongs(idPlaylist);

        //Probar esto luego:
        //setSongs(songs.map((song) => song.id===id ? res.data : song))
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        setSongsFilter,
        setSongs,

        Search,
        deleteSong,
        addSongToPlaylist,
        FindOne,
        updateSong,
        songs,
        onOpen,
        isOpen,
        onClose,
        errors,
        setErrors,
        song,
        setSong,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
