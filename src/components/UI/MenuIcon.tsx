import styles from './menuIcon.module.css';

interface MenuIcon {
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  menuOpen: boolean;
}

const MenuIcon: React.FC<MenuIcon> = ({
  onOpenMenu,
  onCloseMenu,
  menuOpen,
}) => {
  const menuHandler = () => {
    menuOpen ? onCloseMenu() : onOpenMenu();
  };

  return (
    <button className={styles.hamburger} onClick={menuHandler}>
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

export default MenuIcon;
