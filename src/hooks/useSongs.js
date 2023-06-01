import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";

const useSongs = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["songs", id],
    queryFn: () => {
      return apiClient.get(`/playlist/${id}`).then(({ data }) => {
        const Songs = data.dataTotal.songs.map((song) => song.song);

        return Songs;
      });
    },
    staleTime: ms("24h"),
    initialData: () => {
      const playlists = queryClient.getQueryData(["playlists"]);
      const playlist = playlists?.find(
        (playlist) => playlist.id === parseInt(id)
      );
      if (playlist) {
        return playlist.songs.map((song) => song.song);
      } else {
        return undefined;
      }
    },
  });
};

export default useSongs;
