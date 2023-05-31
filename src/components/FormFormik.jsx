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
  console.log(keys);
  console.log("dataInitial", dataInitial);
  //const [formSend, setFormSend] = useState(false);
  return (
    <>
      <Formik
        initialValues={dataInitial}
        validate={(valor) => {
          let errors = {};

          // Validacion nombre
          if (!valor.name) {
            errors.name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.nombre)) {
            errors.name = "El nombre solo puede contener letras y espacios";
          }

          // Validacion correo
          if (!valor.link) {
            errors.link = "Por favor ingresa un link";
          } else if (
            !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(valor.link)
          ) {
            errors.link = "El link tiene que ser valido.";
          }

          //   if (!valor.artist) {
          //     errors.artist = "Por favor ingresa un artista";
          //   }

          if (!valor.recommendedBy) {
            errors.recommendedBy = "Por favor ingresa un artista";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.recommendedBy)) {
            errors.recommendedBy =
              "El artista solo puede contener letras y espacios";
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("submit");
          console.log(valores);

          onClick(valores);
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
