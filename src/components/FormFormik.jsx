import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
const FormFormik = ({ keys, dataInitial, onClose, onClick }) => {
  //const [formSend, setFormSend] = useState(false);
  return (
    <>
      <Formik
        initialValues={dataInitial}
        validate={(values) => {
          let errors = {};

          if (!values.name) {
            errors.name = "Please enter a name";
          } else if (!/^[a-zA-ZÀ-ÿ\s&]{1,40}$/.test(values.name)) {
            errors.name = "The name can only contain letters and spaces";
          }

          if ("CreatedBy" in values) {
            if (!values.CreatedBy) {
              errors.CreatedBy = "Please write your name";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.CreatedBy)) {
              errors.CreatedBy = "The name can only contain letters and spaces";
            }
          } else {
            // Validacion nombre

            // Validacion correo
            if (!values.link) {
              errors.link = "Please enter a link";
            } else if (
              !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(values.link)
            ) {
              errors.link = "The link has to be valid";
            }

            //   if (!values.artist) {
            //     errors.artist = "Por favor ingresa un artista";
            //   }

            if (!values.recommendedBy) {
              errors.recommendedBy = "Please enter an artist";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.recommendedBy)) {
              errors.recommendedBy =
                "Artist can only contain letters and spaces";
            }
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          onClick(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            {keys.map((key) => {
              return key != "id" && key != "songs" ? (
                <FormControl
                  isRequired={key === "artist" ? false : true}
                  key={key}
                  isInvalid={errors[key] && touched[key]}
                  mb={6}
                >
                  <FormLabel>{key} :</FormLabel>
                  <Input
                    type="text"
                    id={key}
                    name={key}
                    value={values[key]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    //placeholder="enter the {name}"
                  />
                  <FormErrorMessage>{errors[key]}</FormErrorMessage>
                </FormControl>
              ) : null;
            })}

            <Flex justifyContent="center" alignItems="flex-end" mt={30}>
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
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormFormik;
