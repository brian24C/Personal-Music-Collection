import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";
const usePlaylists = () => {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: () => {
      return apiClient.get("/playlist").then(({ data }) => data.data);
    },
    staleTime: ms("24h"),
  });
};

export default usePlaylists;
