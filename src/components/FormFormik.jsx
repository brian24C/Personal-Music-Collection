import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
const Formulario = (keys, form, onForm, setFormSend) => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={form}
        validate={(valor) => {
          let errors = {};

          // Validacion nombre
          if (!valor.name) {
            errors.name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.nombre)) {
            errors.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion correo
          if (!valor.link) {
            errors.correo = "Por favor ingresa un link";
          } else if (
            !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(valor.correo)
          ) {
            errors.correo = "El link tiene que ser valido.";
          }

          if (!valor.artist) {
            errors.name = "Por favor ingresa un artista";
          }

          if (!valor.recomendedBy) {
            errors.recomendedBy = "Por favor ingresa un artista";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.nombre)) {
            errors.recomendedBy =
              "El artista solo puede contener letras y espacios";
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          //onForm(valores)
          //setFormSend(true)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormControl isInvalid={errors.name && touched.name}>
              <FormLabel></FormLabel>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
              />
              <FormErrorMessage>enter the {name}</FormErrorMessage>
            </FormControl>
            {keys.map((key) => {
              return key != "id" && key != "songs" ? (
                <FormControl isInvalid={errors[key] && touched[key]}>
                  <FormLabel>{key}</FormLabel>
                  <Field
                    type="text"
                    id={key}
                    name={key}
                    //placeholder="enter the {name}"
                  />
                  <FormErrorMessage>enter the {key}</FormErrorMessage>
                </FormControl>
              ) : null;
            })}

            {/* <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )} */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
