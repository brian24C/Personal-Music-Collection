import { ArrowDownIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image as ChakraImage,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BeatLoader } from "react-spinners";
import apiClient from "../services/api-client";
import AlertDeleteImage from "./AlertDeleteImage";
import useImageStore from "./store";

const Uploader = () => {
  const toast = useToast();
  const [file, setFile] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const setData = useImageStore((s) => s.setData);
  const setFileState = (data) => setFile((p) => ({ ...p, ...data }));

  const handleSubmit = async () => {
    try {
      if (Object.keys(file).length === 0) {
        return toast({
          title: "You have to upload one image first",
          duration: 2000,
          isClosable: true,
          status: "info",
          position: "bottom-right",
        });
      }

      setIsUploading(true);
      const { base64, height, width } = file;
      //const url = "http://127.0.0.1:9001/api/v1/image/upload";

      const { data } = await apiClient.post("image/upload", {
        src: base64,
        height: 200,
      });
      setIsUploading(false);

      if (data.dataTotal.filename) {
        setData({ url: data.dataTotal.url, filename: data.dataTotal.filename });
      } else {
        const [, resultado] = data.dataTotal.public_id.split("/");
        setData({ url: data.dataTotal.url, filename: resultado });
      }

      toast({
        title: "Avatar uploaded successfully",
        duration: 2000,
        isClosable: true,
        status: "success",
        position: "top",
        icon: <DownloadIcon />,
      });
    } catch (error) {
      console.log(error.response.data.message);
      setIsUploading(false);
    }
  };

  const onDrop = (acceptedFiles) => {
    const fileObject = acceptedFiles[0];

    const preview = URL.createObjectURL(fileObject);
    setFileState({ fileObject, preview });
    // Do something with the files
    const image = new Image();

    image.src = preview;
    image.onload = () =>
      setFileState({
        width: image.width,
        height: image.height,
      });

    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.readAsDataURL(fileObject);
    reader.onload = () => setFileState({ base64: reader.result });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },
  });

  useEffect(() => () => URL.revokeObjectURL(file.preview), [file.preview]);

  return (
    <Box>
      <Text as="kbd" textAlign="center" display="block">
        <ArrowDownIcon /> Change your avatar <ArrowDownIcon />
      </Text>
      <Box m="0 auto" maxW="50rem" w="80%" marginTop={4}>
        {file.preview ? (
          <ChakraImage src={file.preview} alt="" w="100%" />
        ) : (
          <Box
            display="grid"
            placeItems="center"
            minH="15rem"
            border="1px dashed black"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Text as="kbd" padding={5}>
              {isDragActive
                ? "Release to drop the files here"
                : "Drag one drop a file here, or click to select a file"}
            </Text>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: "1rem",
          }}
        >
          <Button
            onClick={() => setFile({})}
            _hover={{ backgroundColor: "blue.200" }}
          >
            Reset
          </Button>
          <Button
            isLoading={isUploading}
            onClick={handleSubmit}
            _hover={{ backgroundColor: "blue.200" }}
            spinner={<BeatLoader size={8} color="white" />}
            colorScheme={isUploading ? "blue" : null}
          >
            Submit
          </Button>
        </Box>
      </Box>
      {/* <Button
        onClick={() => {
          const deleteImage = async () => {
            const { data } = await apiClient.delete("/image/" + filename);
          };
          deleteImage();
          deleteImageData();
        }}
        colorScheme="red"
        mt={6}
      >
        
        <Text as="kbd" fontSize={{ base: "12px", md: "16px", lg: "16px" }}>
          Click to Delete your Avatar
        </Text>
      </Button>{" "} */}
      <AlertDeleteImage />
    </Box>
  );
};

export default Uploader;
