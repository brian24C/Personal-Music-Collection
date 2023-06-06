import { create } from "zustand";

const useImageStore = create((set) => ({
  url: "",
  setUrl: (url) =>
    set((store) => ({
      url: url,
    })),
}));

export default useImageStore;
