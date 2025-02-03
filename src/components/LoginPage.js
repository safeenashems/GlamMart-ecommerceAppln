// LoginPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")//Ensures the string follows email formatting.
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

function LoginPage() {

  const handleSubmit = (e) => {
    const { email, password } = e; // Destructure values from Formik
    // e.preventDefault();
    const storedPassword = localStorage.getItem(email);
    console.log("Email:", email);
    console.log("Password:", password);

    if (storedPassword === password) {
        alert("Login Successful");
      } else {
        alert("Invalid email or password");
      }
    };

  return (
    <div  className="Form">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >

{() => (
          <Form>
        <div>
          <label>Email:</label>
          
           <Field
            type="email"
             name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>

        <div style={{padding: '1%'}}>
          <label>Password:</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>

        <button type="submit">Login</button>

        <p>
        Need to Register? <Link to="/register">Click Here</Link>
      </p>
      </Form>
)}
      </Formik>
     
    </div>
  );
}

export default LoginPage;
