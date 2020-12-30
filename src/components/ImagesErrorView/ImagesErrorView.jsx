import PropTypes from 'prop-types';
import errorImage from './error.jpg';
import s from './ImagesErrorView.module.css';

function ImagesErrorView({ errorMessage }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="Котик в печали" className={s.Img} />
      <p className={s.Message}>{errorMessage}</p>
    </div>
  );
}

ImagesErrorView.propTypes = {
  errorMessage: PropTypes.string,
};

export default ImagesErrorView;
