import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Product } from "./Product";

const ITEMS_PER_PAGE = 10;

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
      `https://api.escuelajs.co/api/v1/products?offset=${offset + ITEMS_PER_PAGE}&limit=${ITEMS_PER_PAGE}`
    );
    setOffset(offset + ITEMS_PER_PAGE);
  };

  const previousPage = () => {
    // if (!offset) {
    //   return;
    // }
    setCurrentPageUrl(
      `https://api.escuelajs.co/api/v1/products?offset=${offset - ITEMS_PER_PAGE}&limit=${ITEMS_PER_PAGE}`
    );
    setOffset(offset - ITEMS_PER_PAGE);
  };

  return (
    <>
      <Pagination
        currentPage={offset / ITEMS_PER_PAGE + 1}
        isFirstPage={offset === 0}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      {productsList.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-8 w-full list-none">
          {productsList.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}
