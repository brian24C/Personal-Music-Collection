import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useSongSearch from "./useSongSearch";

const useSongAdd = (idPlaylist) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const songsSearch = useSongSearch(params.id);

  return useMutation({
    mutationFn: (data) => {
      return apiClient.post("/song", data).then(({ data }) =>
        apiClient
          .post("/playlist/SongsOnPlaylist", {
            id_song: data.dataTotal.id,
            id_playlist: parseInt(idPlaylist),
          })
          .then((res) => data.dataTotal)
      );
    },
    onMutate: (newSong) => {
      const previousPlaylist = queryClient.getQueryData(["songs", idPlaylist]);
      queryClient.setQueryData(["songs", idPlaylist], (songs) => [
        ...(songs || []),
        newSong,
      ]);

      toast({
        title: "Song added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      return { previousPlaylist };
    },
    onSuccess: (saveSong, newSong) => {
      // queryClient.setQueryData(["songs", idPlaylist], (songs) =>
      //   songs.map((song) => (song === newSong ? saveSong : song))
      // );

      queryClient.invalidateQueries(["songs", idPlaylist]);
      //songsSearch.mutate({ search: "", songStatic });
    },

    onError: (error, newPlaylist, context) => {
      if (!context) return;

      queryClient.setQueryData(["songs", idPlaylist], context.previousPlaylist);
    },
  });
};

export default useSongAdd;
