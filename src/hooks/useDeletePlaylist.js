import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";

const useDeletePlaylist = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => {
      return apiClient
        .delete(`/playlist/${data.playlistId}`)
        .then(({ data }) => data.dataTotal);
    },
    onMutate: (newPlaylist) => {
      const previousPlaylist = queryClient.getQueryData(["playlists"]);
      queryClient.setQueryData(["playlists"], (playlists) =>
        playlists.filter((p) => p.id != newPlaylist.playlistId)
      );

      toast({
        title: "Playlist delete successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      return { previousPlaylist };
    },
    onSuccess: (savePlaylist, newPlaylist) => {},

    onError: (error, newPlaylist, context) => {
      if (!context) return;
      queryClient.setQueryData(["playlists"], context.previousPlaylist);
    },
  });
};

export default useDeletePlaylist;
