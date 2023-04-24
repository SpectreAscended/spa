import rocks from '../assets/rocks.png';
import secondaryLogo from '../assets/Secondary logo 2.svg';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <figure className={styles['secondary-logo']}>
        <img src={secondaryLogo} alt="Asina Sunshine Health Spa" />
      </figure>
      <figure>
        <img src={rocks} style={{ maxWidth: '85%' }} alt="" />
      </figure>
    </div>
  );
};

export default Hero;
