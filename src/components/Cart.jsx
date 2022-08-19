import { useAppContext } from "../hooks/useAppContext";
import styles from "./Cart.module.css";

export function Cart() {
  const { cart } = useAppContext();

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Cart ({cart.length})</h1>
    </div>
  );
}
