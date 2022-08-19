import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import styles from "./ShoppingList.module.css";

export function ShoppingList() {
  const [productsList, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`
  );

  useEffect(() => {
    fetch(currentPageUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setProductList(jsonData);
      })
      .catch((err) => console.log(err));
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(
      `https://api.escuelajs.co/api/v1/products?offset=${offset + 10}&limit=10`
    );
    setOffset(offset + 10);
  };

  const previousPage = () => {
    setCurrentPageUrl(
      `https://api.escuelajs.co/api/v1/products?offset=${offset - 10}&limit=10`
    );
    setOffset(offset - 10);
  };

  return (
    <>
      <Pagination nextPage={nextPage} previousPage={previousPage} />
      {productsList.length > 0 && (
        <ul className={styles.listContainer}>
          {productsList.map((product) => (
            <li key={product.id} className={styles.productContainer}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <div className={styles.imgContainer}>
                <img
                  src={
                    product.images
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt={product.title}
                  className={styles.img}
                />
                <div className={styles.description}>{product.description}</div>
                <span className={styles.price}>${product.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
