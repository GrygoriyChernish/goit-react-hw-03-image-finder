import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imageName: '',
  };

  handleImageNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { imageName } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    if (imageName.trim() === '') {
      toast.warning('You have not entered anything! Try again...');
      return;
    }
    onSubmit(imageName.trim());
    this.setState({ imageName: '' });
    event.target[1].value = '';
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleImageNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
