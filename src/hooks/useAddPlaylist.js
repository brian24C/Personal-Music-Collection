import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiClient from "../services/api-client";

const useAddPlaylist = (onPlaylist) => {
  const queryClient = useQueryClient();
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
      console.log("playlist: ", newPlaylist, " playlists: ");
      console.log("llega a onMutate");
      return { previousPlaylist };
    },
    onSuccess: (savePlaylist, newPlaylist) => {
      queryClient.setQueryData(["playlists"], (playlists) =>
        playlists.map((p) => (p === newPlaylist ? savePlaylist : p))
      );
      console.log("llega onsucces");
    },

    onError: (error, newPlaylist, context) => {
      if (!context) return;
      console.log("lanza error");
      queryClient.setQueryData(["playlists"], context.previousPlaylist);
    },
  });
};

export default useAddPlaylist;
