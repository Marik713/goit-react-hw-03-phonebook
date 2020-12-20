import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import ContactListItem from "./ContactListItem/ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
