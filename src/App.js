import React from 'react';
import ContactForm from './components/ContactForm/ContactFormContainer';
import Filter from './components/Filter/FilterContainer';
import ContactList from './components/ContactList/ContactListContainer';
import Loader from './components/Loader';
import style from './App.module.css';
import Notification from './components/Notification';
import notificationAnimations from './components/Notification/Notification.module.css';
import { CSSTransition } from 'react-transition-group';

export default function App({ isLoading, message }) {
  return (
    <>
      <CSSTransition in={true} appear={true} timeout={500} classNames={style}>
        <h1 className={style.title}>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
      <CSSTransition
        in={Boolean(message)}
        timeout={250}
        unmountOnExit
        classNames={notificationAnimations}
      >
        <Notification message={message} />
      </CSSTransition>
    </>
  );
}
