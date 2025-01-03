import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ onClick }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
