import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import toast from "react-hot-toast";
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
          toast.success(`Contact is deleted`);
        }}
      >
        delete
      </button>
    </>
  );
};

export default Contact;
