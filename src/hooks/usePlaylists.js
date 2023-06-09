import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";
import playlists from "../data/playlists";

const usePlaylists = () => {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: () => {
      return apiClient.get("/playlist").then(({ data }) => data.dataTotal);
    },
    staleTime: ms("24h"),
    //initialData: playlists,
    //initialDataUpdatedAt: 1608412420052,
  });
};

export default usePlaylists;
