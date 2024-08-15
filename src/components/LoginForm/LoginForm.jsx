import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import css from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
// import { Form } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //  validationSchema: validationSchema,
    onSubmit: (values, options) => {
      console.log(values);
      dispatch(login(values));
      options.resetForm();
    },
  });
  return (
    <Container maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={formik.handleSubmit} className={css.formContainer}>
            <h2>Log in to your account</h2>
            <div className={css.inputsContainer}>
              <TextField
                fullWidth
                size="small"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                // id="password"
                size="small"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ mb: 2 }}
              />
            </div>
            <Button
              sx={{ ml: 56 }}
              color="secondary"
              variant="contained"
              size="small"
              type="submit"
            >
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>

    // </div>
  );
};

// const LoginForm = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const dispatch = useDispatch();
//   const handleSubmit = (values, options) => {
//     console.log(values);
//     dispatch(login(values));
//     options.resetForm();
//   };
//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field name="email" type="text" placeholder="Enter your email" />
//         <Field
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//         />
//         <button type="submit">Login</button>
//       </Form>
//     </Formik>
//   );
// };

export default LoginForm;
