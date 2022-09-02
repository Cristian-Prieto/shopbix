import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Product } from "../components/Product";

const ITEMS_PER_PAGE = 10;

export function ShoppingList() {
  const [productsList, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_SHOPPING_API_URL}/api/v1/products?offset=${offset}&limit=10`
  );

  useEffect(() => {
    fetch(currentPageUrl)
      .then((response) => response.json())
      .then((jsonData) => setProductList(jsonData))
      .catch((error) => console.error(error));
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(
      `${process.env.REACT_APP_SHOPPING_API_URL}/api/v1/products?offset=${
        offset + ITEMS_PER_PAGE
      }&limit=${ITEMS_PER_PAGE}`
    );

    setOffset(offset + ITEMS_PER_PAGE);
  };

  const previousPage = () => {
    setCurrentPageUrl(
      `${process.env.REACT_APP_SHOPPING_API_URL}/api/v1/products?offset=${
        offset - ITEMS_PER_PAGE
      }&limit=${ITEMS_PER_PAGE}`
    );

    setOffset(offset - ITEMS_PER_PAGE);
  };

  return (
    <>
      <Pagination
        currentPage={offset / ITEMS_PER_PAGE + 1}
        isFirstPage={offset === 0}
        isLastPage={!productsList.length}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      {productsList.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-8 w-full list-none">
          {productsList.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="flex-1 "></div>
      )}
      <Pagination
        currentPage={offset / ITEMS_PER_PAGE + 1}
        isFirstPage={offset === 0}
        isLastPage={!productsList.length}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </>
  );
}
