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
import * as Yup from "yup";
import toast from "react-hot-toast";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name is not valid. Only letters, apostrophes, and dashes are allowed."
      )
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}$/,
        "Number is not valid. Please follow the international phone number format."
      )
      .required("Number is required"),
  });
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
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </div>

          <div className={css.fieldContainer}>
            <label className={css.label}>Number: </label>
            <Field
              placeholder="Enter contact number"
              className={css.input}
              type="tel"
              name="number"
              required
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
