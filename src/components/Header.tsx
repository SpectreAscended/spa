import styles from './header.module.css';
import logoImg from '../assets/logo copy.png';
import MenuIcon from './UI/MenuIcon';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={logoImg} alt="Asina Sunshine Health Spa Logo" />
      </figure>
      <MenuIcon />
    </header>
  );
};

export default Header;
