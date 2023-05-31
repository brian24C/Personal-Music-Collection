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

const DrawerGeneral = ({ name, data, isOpen, onClose, onClick }) => {
  const [form, setForm] = useState(data);

  const keys = Object.keys(data);

  useEffect(() => {
    console.log("useeffect");
    setForm(data);
  }, [data]);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
            {keys.map((key) => {
              return key != "id" && key != "songs" ? (
                <React.Fragment key={key}>
                  <InputsGroup
                    name={key}
                    onChangeHandler={onChangeHandler}
                    value={form[key] || ""}
                  />
                </React.Fragment>
              ) : null;
            })}
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button
            variant="outline"
            mr={3}
            onClick={() => {
              onClose();
              //setForm({});
            }}
          >
            Cancel
          </Button>
          <Button onClick={() => onClick(form)} colorScheme="blue">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerGeneral;
