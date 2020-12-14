import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';
import style from './App.module.css';
import Notification from './components/Notification';
import notificationAnimations from './components/Notification/Notification.module.css';

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getContacts } from './redux/phonebook/phonebookOperations';
import {
  getMessage,
  getLoading,
} from './redux/phonebook/phonebookSelectors.js';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    getContacts: PropTypes.func.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  };

  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { isLoading, message } = this.props;
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
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  message: getMessage(state),
});

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
