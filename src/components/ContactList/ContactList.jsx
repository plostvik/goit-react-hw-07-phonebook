import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import { getvisibleContacts } from '../../redux/phonebook/phonebookSelectors';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    console.log('re-render');
    const { contacts } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.contactList}>
        {contacts.map(el => {
          return (
            <CSSTransition key={el.id} classNames={styles} timeout={250}>
              <ContactListItem contact={el} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getvisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
