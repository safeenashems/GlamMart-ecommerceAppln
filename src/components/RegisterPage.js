// RegisterPage.js
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

function RegisterPage() {
    const handleRegister = (values) => {
        // Store email and password in localStorage
        localStorage.setItem(values.email, values.password);
        alert("Registration Successful");
  };

  return (
    <div className="Form">
      <h2>Register</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >

{({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
       
        <div>
          <label>Password:</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
           <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Register</button>
      </Form>
)}
      </Formik>
    </div>
  );
}

export default RegisterPage;
