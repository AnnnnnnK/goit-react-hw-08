import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectContacts } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filter/slice";
// import { changeFilter } from "../../redux/filtersSlice";
// import { selectContacts } from "../../redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <>
      {contacts.length > 0 && (
        <div className={css.container}>
          <input
            className={css.input}
            type="search"
            onChange={(e) => {
              dispatch(changeFilter(e.target.value));
            }}
            placeholder="Find name"
          />
        </div>
      )}
    </>
  );
};

export default Filter;
