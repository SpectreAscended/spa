import { useState } from 'react';
import styles from './hamburger.module.css';

const Hamburger: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <button
      className={styles.hamburger}
      onClick={() => {
        setMenuOpen(open => !open);
      }}
    >
      <div className={`${styles.top} ${menuOpen ? styles.active : ''}`}></div>
      <div
        className={`${styles.center} ${menuOpen ? styles.active : ''}`}
      ></div>
      <div
        className={`${styles.bottom} ${menuOpen ? styles.active : ''}`}
      ></div>
    </button>
  );
};

export default Hamburger;
