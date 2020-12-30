import { Component } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../../services/pixabayApi';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImagesErrorView from '../ImagesErrorView/ImagesErrorView';
import SpinnerLoader from '../../UI/SpinnerLoader/SpinnerLoader';
import ImagesIdleView from '../ImagesIdleView/ImagesIdleView';
import Button from '../../UI/Button/Button';

class RenderImagesApi extends Component {
  static propTypes = {
    imageName: PropTypes.string,
  };
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      this.resetImages();
      this.findImagesByName();
    }
    if (prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      this.findImagesByName();
    }
  }

  async findImagesByName() {
    const { imageName } = this.props;
    const { page } = this.state;
    try {
      const data = await fetchData(imageName, page);
      this.setState(({ images }) => {
        return { images: [...images, ...data.hits], status: 'resolved' };
      });
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.scrollPage();
  };

  resetImages = () => {
    this.setState({ images: [] });
  };

  scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: 'smooth',
      });
    }, 1000);
  };

  render() {
    const { images, error, status } = this.state;
    const { imageName } = this.props;

    if (status === 'idle') {
      return <ImagesIdleView />;
    }
    if (status === 'pending') {
      return (
        <>
          <ImageGallery images={images} />
          <SpinnerLoader />;
        </>
      );
    }
    if (status === 'rejected') {
      return <ImagesErrorView errorMessage={error.message} />;
    }
    if (images.length === 0) {
      return (
        <ImagesErrorView
          errorMessage={`Нет картинок с именем: '${imageName}'`}
        />
      );
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onLoadMore={this.handleButtonClick} />
        </>
      );
    }
  }
}

export default RenderImagesApi;
