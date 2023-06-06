import { create } from "zustand";

const useImageStore = create((set) => ({
  imageData: { url: "", filename: "" },
  setData: (data) =>
    set((store) => ({
      imageData: { url: data.url, filename: data.filename },
    })),

  deleteImageData: () =>
    set((store) => ({
      imageData: { url: "", filename: "" },
    })),
}));

export default useImageStore;
