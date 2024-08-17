import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
// import { selectContacts } from "../../redux/contactsSlice";
// import { Notify } from "notiflix";
// import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
// import { selectContacts } from "../../redux/contactsSlice";
// import * as Yup from "yup";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .typeError("number must be a number")
    .min(5, "Too Short!")
    .required("Required"),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const nameIsAdded = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (nameIsAdded) {
      toast.error("Name is already added.");
      return;
    }

    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.formContainer}>
            <h1 className={css.title}>Phonebook</h1>

            <div className={css.fieldContainer}>
              <label className={css.label}>Name: </label>
              <Field
                className={css.input}
                placeholder="Enter contact name"
                type="text"
                name="name"
                required
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>

            <div className={css.fieldContainer}>
              <label className={css.label}>Number: </label>
              <Field
                placeholder="Enter contact number"
                className={css.input}
                type="tel"
                name="number"
                required
              />
              {errors.number && touched.number ? (
                <div>{errors.number}</div>
              ) : null}
            </div>
            <button className={css.btn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
