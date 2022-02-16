import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

export const validate = yup.object({
  mobile: yup
    .number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required("A phone number is required"),
  password: yup.string().required("Please provide a valid password"),
  otp: yup
    .number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(4)
    .max(4)
    .required("Please provide a valid"),
});
