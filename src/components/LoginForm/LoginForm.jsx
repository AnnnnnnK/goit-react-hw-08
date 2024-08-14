import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
// import { Form } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="email" type="text" placeholder="Enter your email" />
        <Field
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
