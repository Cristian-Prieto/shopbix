import { Cart } from "./Cart";
import styles from "./Header.module.css";
export function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ShopBix</h1>
      <Cart />
    </div>
  );
}
