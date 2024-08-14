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
      alert("Name is already added.");
      return;
    }

    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <label className={css.label}>Name: </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />

          <label className={css.label}>Number: </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
