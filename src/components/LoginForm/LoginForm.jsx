import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
// import { Form } from "react-router-dom";
import css from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { selectUser } from "../../redux/auth/selectors";

const LoginForm = () => {
  const user = useSelector(selectUser);
  // console.log(userName);

  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(login(values));
    toast.success(`You're now logged in. Enjoy your time!`);
    options.resetForm();
  };
  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // className={css.container}
      >
        <Form className={css.formContainer}>
          {/* <div className={css.fieldContainer}> */}
          <h2>Log in to your account</h2>
          {/* <label className={css.label}>Name:</label> */}
          <div className={css.fieldContainer}>
            <label className={css.label}>Name:</label>
            <Field
              name="email"
              type="text"
              placeholder="Enter your email"
              className={css.input}
            />
          </div>
          {/* <label className={css.label}>Name:
              
            </label> */}
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
            Login
          </button>
          <div className={css.textContainer}>
            <NavLink to="/register" className={css.link}>
              Register
            </NavLink>
            <p className={css.text}> if you don't have an account</p>
          </div>
        </Form>
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
