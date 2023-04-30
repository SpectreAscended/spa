import styles from './carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import image01 from '../assets/image-01.webp';
import image02 from '../assets/image-02.webp';
import image03 from '../assets/image-03.webp';

const Carousel: React.FC = () => {
  return (
    <div className={styles.carousel}>
      <button className={`${styles.button} ${styles['button--back']}`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={`${styles.button} ${styles['button--forward']}`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <figure className={styles.image}>
        <img src={image01} alt="" />
      </figure>
      <figure className={styles.image}>
        <img src={image02} alt="" />
      </figure>
      <figure className={styles.image}>
        <img src={image03} alt="" />
      </figure>
    </div>
  );
};

export default Carousel;
