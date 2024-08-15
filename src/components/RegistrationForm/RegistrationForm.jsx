import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    //  validationSchema: validationSchema,
    onSubmit: (values, options) => {
      console.log(values);
      dispatch(register(values));
      options.resetForm();
    },
  });
  return (
    <Container maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <h2>Create an account</h2>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              size="small"
              margin="normal"
            />
            <TextField
              fullWidth
              // id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              size="small"
              margin="normal"
              // onBlur={formik.handleBlur}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              // id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              size="small"
              margin="normal"
            />
            <Button color="secondary" variant="contained" type="submit">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
export default RegistrationForm;

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
// };
// const dispatch = useDispatch();
// const handleSubmit = (values, options) => {
//   console.log(values);
//   dispatch(register(values));
//   options.resetForm();
// };
// return (
//   <div>
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field name="name" placeholder="Enter your name" />
//         <Field name="email" type="text" placeholder="Enter your email" />
//         <Field
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//         />
//         <button type="submit">Login</button>
//       </Form>
//     </Formik>
//   </div>
// );
