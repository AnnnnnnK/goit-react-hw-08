import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="name" placeholder="Enter your name" />
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
export default RegistrationForm;
