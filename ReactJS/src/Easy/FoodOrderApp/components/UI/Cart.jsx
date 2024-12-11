import styles from "./Cart.module.css";
const Cart = ({ children }) => {
  return <div className={styles.cart}>{children}</div>;
};

export default Cart;
