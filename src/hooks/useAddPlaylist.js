import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";

const useAddPlaylist = (onPlaylist) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => {
      return apiClient
        .post("/playlist", data)
        .then(({ data }) => data.dataTotal);
    },
    onMutate: (newPlaylist) => {
      const previousPlaylist = queryClient.getQueryData(["playlists"]);
      queryClient.setQueryData(["playlists"], (playlists) => [
        ...playlists,
        newPlaylist,
      ]);

      onPlaylist();

      toast({
        title: "Song added successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      return { previousPlaylist };
    },
    onSuccess: (savePlaylist, newPlaylist) => {
      queryClient.setQueryData(["playlists"], (playlists) =>
        playlists.map((p) => (p === newPlaylist ? savePlaylist : p))
      );
    },

    onError: (error, newPlaylist, context) => {
      if (!context) return;

      queryClient.setQueryData(["playlists"], context.previousPlaylist);
    },
  });
};

export default useAddPlaylist;
