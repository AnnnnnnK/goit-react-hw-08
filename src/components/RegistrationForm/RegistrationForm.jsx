import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.number()
    .typeError("Password must be a number")
    .min(5, "Too Short!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

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
    toast.success(`Congratulations! You're now registered. Let's get started!`);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.formContainer}>
            <h2>Create an account</h2>
            <div className={css.fieldContainer}>
              <label className={css.label}>Name:</label>
              <Field
                name="name"
                placeholder="Enter your name"
                className={css.input}
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div className={css.fieldContainer}>
              <label className={css.label}>Email:</label>
              <Field
                name="email"
                type="text"
                placeholder="Enter your email"
                className={css.input}
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className={css.fieldContainer}>
              <label className={css.label}>Password:</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className={css.input}
                title="Password must be at least 8 characters long"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
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
        )}
      </Formik>
    </div>
  );
};
export default RegistrationForm;
