import { Link } from 'react-scroll';
import styles from './nav.module.css';

interface NavProps {
  closeMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-list']}>
        <li>
          <Link
            to="services"
            className={styles['nav-link']}
            smooth="true"
            offset={-175}
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Book
          </Link>
        </li>
        <li>
          <Link
            to="hours"
            className={styles['nav-link']}
            smooth="true"
            offset={-175}
            onClick={closeMenu}
          >
            Hours
          </Link>
        </li>
        <li>
          <Link
            to="location"
            className={styles['nav-link']}
            smooth="true"
            offset={-175}
            onClick={closeMenu}
          >
            Location
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
