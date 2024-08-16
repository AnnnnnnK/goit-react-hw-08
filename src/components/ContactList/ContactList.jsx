import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import SearchBox from "../SearchBox/SearchBox";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
// import { selectNameFilter } from "../../redux/filtersSlice";
// import {
//   selectContacts,
//   selectError,
//   selectFilteredContacts,
//   selectLoading,
// } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {error && <h1>Sorry, something went wrong</h1>}
      {loading && <Loader />}
      {contacts.length <= 0 ? (
        <h2 className={css.title}>There is no contacts added</h2>
      ) : (
        <h2 className={css.title}>Contacts</h2>
      )}
      <SearchBox />
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contactCard}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
