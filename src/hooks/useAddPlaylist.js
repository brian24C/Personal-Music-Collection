import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useAddPlaylist = (onPlaylist) => {
  const navigate = useNavigate();
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
        ...(playlists || []),
        newPlaylist,
      ]);

      onPlaylist();

      toast({
        title: "Playlist added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      return { previousPlaylist };
    },
    onSuccess: (savePlaylist, newPlaylist) => {
      queryClient.setQueryData(["playlists"], (playlists) =>
        playlists.map((p) =>
          p === newPlaylist ? { ...savePlaylist, songs: [] } : p
        )
      );

      navigate("/");
    },

    onError: (error, newPlaylist, context) => {
      if (!context) return;

      queryClient.setQueryData(["playlists"], context.previousPlaylist);
    },
  });
};

export default useAddPlaylist;
