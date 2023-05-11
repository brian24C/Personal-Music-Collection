import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalWrapper";
import InputsGroup from "./InputsGroup";

export default function DrawerExample() {
  const { isOpen, onClose } = useContext(GlobalContext);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            onClick={() => {
              onClose();
            }}
          />
          <DrawerHeader>Create / Update user</DrawerHeader>

          <DrawerBody>
            <Stack spacing={"24px"}>
              <InputsGroup name="name" />
              <InputsGroup name="link" />
              <InputsGroup name="recommendedBy" />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
