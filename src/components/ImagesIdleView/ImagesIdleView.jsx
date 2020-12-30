import idleImage from './racion-vzrosloj-koshki-1170x715.jpg';
import s from './ImagesIdleView.module.css';

function ImagesIdleView() {
  return (
    <div>
      <img src={idleImage} alt="Котик смотрит на мышь" className={s.Img} />
      <p className={s.Message}>Hello, what are you looking for?</p>
    </div>
  );
}

export default ImagesIdleView;
