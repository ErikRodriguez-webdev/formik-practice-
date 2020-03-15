import React from "react";
import "../App.css";

//formik
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ fullname: "", email: "", company: "", message: "" }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .max(15, "* Your name is too long bro, shorten it")
            .required("* Required"),
          email: Yup.string()
            .email("* You need to enter an email addy")
            .required("* Required"),
          company: Yup.string(),
          message: Yup.string().required(
            "* You need a message in order to submit."
          )
        })}
        onSubmit={(values, formikBag) => {
          console.log(values);
          formikBag.resetForm();
        }}
      >
        <Form>
          <label htmlFor="fullname">Full Name: </label>
          <Field name="fullname" />
          <ErrorMessage
            name="fullname"
            className="allErrors"
            style="color:red;"
          />

          <label htmlFor="email">Email: </label>
          <Field name="email" />
          <ErrorMessage name="email" className="allErrors" />

          <label htmlFor="company">Company: </label>
          <Field name="company" />
          <ErrorMessage name="company" className="allErrors" />

          <label htmlFor="message">Message: </label>
          <Field name="message" />
          <ErrorMessage name="message" className="allErrors" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
