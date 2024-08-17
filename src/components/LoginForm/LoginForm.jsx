import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
// import { Form } from "react-router-dom";
import css from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { selectUser } from "../../redux/auth/selectors";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  password: Yup.number()
    .typeError("Password must be a number")
    .min(5, "Too Short!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values));
    toast.success(`You're now logged in. Enjoy your time!`);
    options.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.formContainer}>
            <h2>Log in to your account</h2>
            <div className={css.fieldContainer}>
              <label className={css.label}>Name:</label>
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
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <button type="submit" className={css.btn}>
              Login
            </button>
            <div className={css.textContainer}>
              <NavLink to="/register" className={css.link}>
                Register
              </NavLink>
              <p className={css.text}> if you don't have an account</p>
            </div>
          </Form>
        )}
      </Formik>
      {/* <Toaster /> */}
    </div>
  );
};

export default LoginForm;

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

// export default LoginForm;
