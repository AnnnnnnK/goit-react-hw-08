import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
// import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        delete
      </button>
    </>
  );
};

export default Contact;
