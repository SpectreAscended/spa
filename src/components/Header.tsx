import styles from './header.module.css';
import logoImg from '../assets/logo copy.png';
import Hamburger from './UI/Hamburger';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={logoImg} alt="Asina Sunshine Health Spa Logo" />
      </figure>
      <Hamburger />
    </header>
  );
};

export default Header;
