import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebookOperations.js';
import {
  addContactError,
  setMessageToNull,
} from '../../redux/phonebook/phonebookActions';
import {
  getContacts,
  getMessage,
} from '../../redux/phonebook/phonebookSelectors.js';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    addContactError: PropTypes.func.isRequired,
    setMessageToNull: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const {
      contacts,
      addContact,
      addContactError,
      setMessageToNull,
    } = this.props;
    if (contacts.some(el => el.name === name)) {
      addContactError('Contact already exists!');
    } else {
      addContact(name, number);
      this.setState({ name: '', number: '' });
    }
    setTimeout(() => setMessageToNull(), 1500);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form
          action="submit"
          onSubmit={this.handleSubmit}
          className={styles.contactform}
        >
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            className={styles.input}
          />
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            className={styles.input}
          />
          <input type="submit" value="Add Contact" className={styles.button} />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
  message: getMessage(state),
});

const mapDispatchToProps = {
  addContact,
  addContactError,
  setMessageToNull,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
