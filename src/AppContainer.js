import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from './redux/phonebook/phonebookOperations';
import PropTypes from 'prop-types';
import {
  getMessage,
  getLoading,
} from './redux/phonebook/phonebookSelectors.js';
import App from './App';

class AppContainer extends Component {
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
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  message: getMessage(state),
});

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
