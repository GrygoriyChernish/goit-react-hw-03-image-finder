import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './SpinnerLoader.module.css';

function SpinnerLoader() {
  return (
    <div className={s.Loader}>
      <Loader type="Bars" color="#3f51b5" height={50} width={50} timeout={0} />
    </div>
  );
}

export default SpinnerLoader;
