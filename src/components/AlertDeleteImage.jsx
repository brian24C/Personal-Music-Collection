import { DeleteIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Button, Text, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import apiClient from "../services/api-client";
import AlertDelete from "./AlertDelete";
import useImageStore from "./store";

function AlertDeleteImage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteImageData = useImageStore((s) => s.deleteImageData);
  const filename = useImageStore((s) => s.imageData.filename);
  const toast = useToast();

  const deleteImage = () => {
    if (filename) {
      const deleteImagefile = async () => {
        await apiClient.delete("/image/" + filename);
      };
      deleteImagefile();
      deleteImageData();
    } else {
      return toast({
        title: "there is no avatar to delete",
        description: "please, upload a image.",
        duration: 2000,
        isClosable: true,
        status: "info",
        position: "top",
      });
    }
  };

  return (
    <>
      <Button
        colorScheme="red"
        onClick={onOpen}
        leftIcon={<DeleteIcon />}
        mt={6}
      >
        <Text as="kbd" fontSize={{ base: "12px", md: "16px", lg: "16px" }}>
          Click to Delete your Avatar
        </Text>
      </Button>

      <AlertDelete
        isOpen={isOpen}
        onClose={onClose}
        onDelete={deleteImage}
        name=""
        nameHeader="Delete Avatar"
        descriptionBody="Are you sure? You can't undo this action afterwards."
      />
    </>
  );
}

export default AlertDeleteImage;
