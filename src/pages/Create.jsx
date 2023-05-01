import {
  FormControl,
  Box,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Box>
      <Form>
        <FormControl>
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>
      </Form>
    </Box>
  );
}
