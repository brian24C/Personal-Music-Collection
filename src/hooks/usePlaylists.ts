import React from "react";
import { useQuery } from "@tanstack/react-query";

const usePlaylists = () => {
  useQuery({
    queryKey: ["genres"],
    queryFn: () => {},
  });
};

export default usePlaylists;
