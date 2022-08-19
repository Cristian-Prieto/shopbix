import { useAppContext } from "../hooks/useAppContext";
import styles from "./Cart.module.css";

export function Cart() {
  const { cart, removeProductFromCart } = useAppContext();

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Cart ({cart.length})</h1>
      <ul>
        {cart.length > 0 &&
          cart.map((product) => (
            <li key={product.id}>
              {product.title}

              <button onClick={() => removeProductFromCart(product)}>
                DELETE
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
