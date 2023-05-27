import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";

const useSongs = (id) => {
  console.log(id);
  return useQuery({
    queryKey: ["songs", id],
    queryFn: () => {
      return apiClient.get(`/playlist/${id}`).then(({ data }) => {
        const Songs = data.dataTotal.songs.map((song) => song.song);
        console.log(Songs);
        return Songs;
      });
    },
    staleTime: ms("24h"),
  });
};

export default useSongs;
