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

export default function DrawerExample(id_playlist) {
  const { isOpen, onClose, song, addSongToPlaylist, updateSong } =
    useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    addSongToPlaylist(form, setForm, id_playlist);
  };

  const onUpdate = () => {
    updateSong(form, setForm, form.id, id_playlist.id_playlist);
  };

  useEffect(() => {
    setForm(song);
  }, [song]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={() => {
        setForm({});
        onClose();
      }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          onClick={() => {
            onClose();
            setForm({});
          }}
        />
        <DrawerHeader>Create / Update user</DrawerHeader>

        <DrawerBody>
          <Stack spacing={"24px"}>
            <InputsGroup
              name="name"
              onChangeHandler={onChangeHandler}
              value={form?.name || ""}
            />
            <InputsGroup
              name="artist"
              onChangeHandler={onChangeHandler}
              value={form?.artist || ""}
            />
            <InputsGroup
              name="link"
              onChangeHandler={onChangeHandler}
              value={form?.link || ""}
            />
            <InputsGroup
              name="recommendedBy"
              onChangeHandler={onChangeHandler}
              value={form?.recommendedBy || ""}
            />
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button
            variant="outline"
            mr={3}
            onClick={() => {
              onClose();
              setForm({});
            }}
          >
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => (form.id ? onUpdate() : onAdd())}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
