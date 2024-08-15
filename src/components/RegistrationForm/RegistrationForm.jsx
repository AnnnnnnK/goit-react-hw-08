import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { NavLink } from "react-router-dom";

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
    <div className={css.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formContainer}>
          {/* <div className={css.fieldContainer}> */}
          <h2>Create an account</h2>
          <div className={css.fieldContainer}>
            <label className={css.label}>Name:</label>
            <Field
              name="name"
              placeholder="Enter your name"
              className={css.input}
            />
          </div>
          <div className={css.fieldContainer}>
            <label className={css.label}>Email:</label>
            <Field
              name="email"
              type="text"
              placeholder="Enter your email"
              className={css.input}
            />
          </div>
          <div className={css.fieldContainer}>
            <label className={css.label}>Password:</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className={css.input}
            />
          </div>
          <button type="submit" className={css.btn}>
            Register
          </button>
          <div className={css.textContainer}>
            <p className={css.text}>Already have an account?</p>
            <NavLink to="/login" className={css.link}>
              Log In
            </NavLink>
          </div>
          <div />
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
