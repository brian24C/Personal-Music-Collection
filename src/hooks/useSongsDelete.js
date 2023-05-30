import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";

const useSongsDelete = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => {
      return apiClient
        .delete(`/song/${data.idSong}`)
        .then(({ data }) => data.dataTotal);
    },
    onMutate: (data) => {
      const previousPlaylist = queryClient.getQueryData([
        "songs",
        data.idPlaylist,
      ]);
      console.log(previousPlaylist);
      queryClient.setQueryData(["songs", data.idPlaylist], (songs) =>
        songs.filter((p) => p.id != data.idSong)
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
      queryClient.setQueryData(
        ["songs", newPlaylist.idPlaylist],
        context.previousPlaylist
      );
    },
  });
};

export default useSongsDelete;
