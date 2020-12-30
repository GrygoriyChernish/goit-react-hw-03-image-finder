import { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../../UI/Modal/Modal';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
      }),
    ),
  };
  state = {
    showModal: false,
    modalImg: '',
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClickOnImage = event => {
    this.setState({ modalImg: event.target.dataset.modalimg });
    this.toggleModal();
  };
  render() {
    const { images } = this.props;
    const { showModal, modalImg } = this.state;
    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={this.handleClickOnImage}
              />
            );
          })}
        </ul>
        {showModal && <Modal modalImg={modalImg} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default ImageGallery;
