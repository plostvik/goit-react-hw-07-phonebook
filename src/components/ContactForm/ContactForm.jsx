import React from 'react';

import styles from './ContactForm.module.css';

export default function ContactForm({
  name,
  number,
  handleSubmit,
  handleChange,
}) {
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className={styles.contactform}
      >
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          className={styles.input}
        />
        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          className={styles.input}
        />
        <input type="submit" value="Add Contact" className={styles.button} />
      </form>
    </>
  );
}
