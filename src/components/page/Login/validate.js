import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

export const validate = yup.object({
  phone: yup
    .number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required("A phone number is required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Please provide a valid password"),
});
