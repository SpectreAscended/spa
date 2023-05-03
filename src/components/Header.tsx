import styles from './header.module.css';
import logoImg from '../assets/logo copy.png';
import MenuIcon from './UI/MenuIcon';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={logoImg} alt="Asina Sunshine Health Spa Logo" />
      </figure>
      <MenuIcon />
      <nav className={styles['nav--mobile']}>
        <ul>
          <li>
            <Link
              to="services"
              className={styles['nav-link']}
              smooth="true"
              offset={-175}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="book"
              className={styles['nav-link']}
              smooth="true"
              offset={-175}
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              to="location"
              className={styles['nav-link']}
              smooth="true"
              offset={-175}
            >
              Location
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
