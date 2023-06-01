import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";
import useSongStore from "../components/store";

const useSongEdit = (close, idPlaylist) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const setEditSongStatic = useSongStore((s) => s.setEditSongStatic);

  return useMutation({
    mutationFn: (data) => {
      return apiClient
        .put(`/song/${data.id}`, {
          ...data,
        })
        .then(({ data }) => data.dataTotal);
    },
    onMutate: (data) => {
      const previousSongs = queryClient.getQueryData(["songs", idPlaylist]);
      queryClient.setQueryData(["songs", idPlaylist], (songs) =>
        songs.map((song) => (song.id === data.id ? data : song))
      );

      toast({
        title: "Song update successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      close();

      return { previousSongs };
    },
    onSuccess: (savePlaylist, newPlaylist) => {
      setEditSongStatic(savePlaylist);
      // queryClient.invalidateQueries(["songs", idPlaylist]);
    },

    onError: (error, newPlaylist, context) => {
      if (!context) return;

      queryClient.setQueryData(["songs", idPlaylist], context.previousSongs);
    },
  });
};

export default useSongEdit;
