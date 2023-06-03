import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import FormFormik from "./FormFormik";

const DrawerGeneral = ({ name, data, isOpen, onClose, onClick }) => {
  const keys = Object.keys(data);

  const firstField = React.useRef();
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={() => {
        onClose();
      }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          onClick={() => {
            onClose();
          }}
        />
        <DrawerHeader borderBottomWidth="1px">{name}</DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <FormFormik
              keys={keys}
              dataInitial={data}
              onClose={onClose}
              onClick={onClick}
            />
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="3px"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerGeneral;
