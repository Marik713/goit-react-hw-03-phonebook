import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.ContactList_item}>
    {name + ":" + number}
    {
      <button
        className={styles.ContactList_button}
        type="button"
        name="delete"
        onClick={onRemove}
      >
        Delete
      </button>
    }
  </li>
);

export default ContactListItem;
