import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";

const useSongsDelete = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (idSong) => {
      console.log(idSong);
      return apiClient
        .delete(`/song/${idSong}`)
        .then(({ data }) => data.dataTotal);
    },
    onMutate: (songDeleteId) => {
      console.log(songDeleteId);
      const previousPlaylist = queryClient.getQueryData(["songs"]);
      console.log(previousPlaylist);
      queryClient.setQueryData(["songs"], (songs) =>
        songs.filter((p) => p.id != songDeleteId)
      );

      toast({
        title: "Song delete successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      return { previousPlaylist };
    },
    onSuccess: (savePlaylist, newPlaylist) => {},

    onError: (error, newPlaylist, context) => {
      if (!context) return;
      console.log(error);
      queryClient.setQueryData(["songs"], context.previousPlaylist);
    },
  });
};

export default useSongsDelete;
