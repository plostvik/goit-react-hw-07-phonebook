import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { filterChange } from '../../redux/phonebook/phonebookActions';

class Filter extends Component {
  static propTypes = {
    filterChange: PropTypes.func.isRequired,
  };

  state = {
    filter: '',
  };

  handleFilterChange = e => {
    const { filterChange } = this.props;
    this.setState({ [e.target.name]: e.target.value });
    filterChange(e.target.value);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <label htmlFor="filter" className={styles.label}>
          Find contacts by name
        </label>
        <input
          type="text"
          name="filter"
          onChange={this.handleFilterChange}
          value={this.state.filter}
          className={styles.input}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  filterChange,
};

export default connect(null, mapDispatchToProps)(Filter);
