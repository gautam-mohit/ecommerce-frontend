import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required"),
});
const Login = () => {
  return (
    <>
      <div>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: "",
            phone: "",
            password: "",
            gender: "",
            date: "",
            income: "",
            about: "",
            social: {
              facebook: "",
              twitter: "",
            },
            hobbies: [],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <label>Name:</label>
              <Field name="name" type="text"></Field>
              <br />
              <br />
              <ErrorMessage name="name" />
              <br />
              <br />
              <label>Phone No:</label>
              <Field name="phone" type="number"></Field>
              <br />
              <br />
              <label>Password:</label>
              <Field name="password" type="password"></Field>
              <br />
              <br />
              <label>Gender:</label>
              <br />
              <br />
              <label>Male:</label>
              <Field name="gender" value="male" type="radio"></Field>
              <label>Female:</label>
              <Field name="gender" value="female" type="radio"></Field>
              <br />
              <br />
              <label>Date:</label>
              <Field name="date" type="date"></Field>
              <br />
              <br />
              <label>Income:</label>
              <Field name="income" as="select">
                <option value="0">Rs 0</option>
                <option value="1000">Rs 1000</option>
                <option value="10000">Rs 10000</option>
                <option value="100000">Rs 100000</option>
              </Field>
              <br />
              <br />
              <label>About:</label>
              <Field name="about" as="textarea"></Field>
              <br />
              <br />
              <label>Social:</label>
              <br />
              <br />
              <label>Facebook:</label>
              <Field name="social.facebook" type="text"></Field>
              <br />
              <br />
              <label>Twitter:</label>
              <Field name="social.twitter" type="text"></Field>
              <br />
              <br />

              <FieldArray
                name="hobbies"
                render={(arrayHelpers) => (
                  <div>
                    {values.hobbies && values.hobbies.length > 0 ? (
                      values.hobbies.map((hobby, index) => (
                        <div key={index}>
                          <Field name={`hobbies.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a hobbies
                      </button>
                    )}
                  </div>
                )}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
