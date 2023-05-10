import { useState } from 'react';
import logoImg from '../assets/logo copy.png';
import MenuIcon from './UI/MenuIcon';
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';
import styles from './header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scroll = Scroll.animateScroll;

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const headerClasses = menuOpen
    ? `${styles.header} ${styles['header--active']}`
    : styles.header;

  return (
    <header className={headerClasses}>
      <div className={styles['header-wrapper']}>
        <figure
          className={styles.logo}
          onClick={() => {
            scroll.scrollToTop();
            closeMenu();
          }}
        >
          <img src={logoImg} alt="Asina Sunshine Health Spa Logo" />
        </figure>

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

        <MenuIcon
          onOpenMenu={openMenu}
          onCloseMenu={closeMenu}
          menuOpen={menuOpen}
        />
      </div>

      {menuOpen && (
        <nav className={styles['nav-mobile']}>
          <ul>
            <li>
              <Link
                to="services"
                className={styles['nav-link-mobile']}
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
                className={styles['nav-link-mobile']}
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
                className={styles['nav-link-mobile']}
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
                className={styles['nav-link-mobile']}
                smooth="true"
                offset={-175}
                onClick={closeMenu}
              >
                Location
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
