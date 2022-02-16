import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Login.scss";
import { validate } from "./validate";
import { INITIAL_VALUES } from "./constant";
const Login = (props) => {
  return (
    <>
      <div className="login">
        <div className="left">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img
            className="loginimage"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="loginimg"
          />
        </div>
        <div className="right">
          <Formik
            validationSchema={validate}
            initialValues={INITIAL_VALUES}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <label>Mobile:</label>
                <Field name="mobile" type="number"></Field>
                <ErrorMessage name="phone" />

                <label>Password:</label>
                <Field name="password" type="password"></Field>
                <ErrorMessage name="password" />

                <label>Otp:</label>
                <Field name="otp" type="otp"></Field>
                <ErrorMessage name="otp" />

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Login;
