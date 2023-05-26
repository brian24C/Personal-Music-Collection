import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";

const useEditPlaylist = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => {
      return apiClient
        .put(`/playlist/${data.id}`, {
          name: data.name,
          CreatedBy: data.CreatedBy,
        })
        .then(({ data }) => data.dataTotal);
    },
    onMutate: (newPlaylist) => {
      const previousPlaylist = queryClient.getQueryData(["playlists"]);
      queryClient.setQueryData(["playlists"], (playlists) =>
        playlists.map((p) => (p.id === newPlaylist.id ? newPlaylist : p))
      );

      toast({
        title: "Song update successfully",
        status: "success",
        duration: 4000,
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

export default useEditPlaylist;
