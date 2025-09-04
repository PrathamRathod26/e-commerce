import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        maxWidth: 1500,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        px: 2,
        my: 8,
      }}
    >
      <Box
        sx={{
          my: 4,
          p: 2,
          textAlign: "center",
          gap: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" fontStyle="italic" color="textPrimary">
          Contact
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur, <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
      </Box>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mx: { xs: 2, sm: 4, md: 0 },
                  p: 3,
                  boxShadow: 3,
                  borderRadius: 4,
                  bgcolor: "secondary.main",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <TextField
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                  />
                </Box>

                <TextField
                  label="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  multiline
                  rows={6}
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 200, py: 1.5 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
