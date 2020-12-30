import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    modalImg: PropTypes.string,
    onClose: PropTypes.func,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImg } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackDropClick}>
        <div className={s.Modal}>
          {<img src={modalImg} alt="Большя картинка элемента коллекции" />}
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
