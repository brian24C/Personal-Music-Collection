import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";

const useSongSearch = (idPlaylist) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      const Songs = queryClient.getQueryData(["songs", idPlaylist]);
      return Songs.filter((song) => {
        if (
          song.name.toString().toLowerCase().includes(data.search.toLowerCase())
        ) {
          return song;
        }
      });
    },
    onMutate: (data) => {
      console.log("usemutate", data);
      const previousSongs = queryClient.getQueryData(["songs", idPlaylist]);
      queryClient.setQueryData(["songs", idPlaylist], (songs) =>
        data.songStatic.filter((song) => {
          if (
            song.name
              .toString()
              .toLowerCase()
              .includes(data.search.toLowerCase())
          ) {
            return song;
          }
        })
      );

      return { previousSongs };
    },
    onSuccess: (savePlaylist, newPlaylist) => {},

    onError: (error, newPlaylist, context) => {
      if (!context) return;

      queryClient.setQueryData(["songs", idPlaylist], context.previousSongs);
    },
  });
};

export default useSongSearch;
