import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import InputsGroup from "./editSongs/InputsGroup";
import FormFormik from "./FormFormik";

const DrawerGeneralCreate = ({ name, data, isOpen, onClose, onClick }) => {
  //const [form, setForm] = useState(data);

  const keys = Object.keys(data);

  //   useEffect(() => {
  //     console.log("efect");
  //     setForm(data);
  //   }, [data]);

  //   const onChangeHandler = (e) => {
  //     setForm({
  //       ...form,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const firstField = React.useRef();
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={() => {
        onClose();
        // setForm({});
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

        <DrawerFooter borderTopWidth="5px">
          {/* <Button
            variant="outline"
            mr={3}
            onClick={() => {
              onClose();
              //setForm({});
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              const hasEmptyValue = Object.values(form).includes("");
              if (!formSend) {
                return console.log("campos vacios");
              }
              return onClick(form);
            }}
            colorScheme="blue"
          >
            Submit
          </Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerGeneralCreate;
