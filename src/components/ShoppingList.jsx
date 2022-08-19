import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

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
    setCurrentPageUrl(`https://api.escuelajs.co/api/v1/products?offset=${offset + 10}&limit=10`);
    setOffset(offset + 10);
  };

  const previousPage = () => {
    setCurrentPageUrl(`https://api.escuelajs.co/api/v1/products?offset=${offset - 10}&limit=10`);
    setOffset(offset - 10);
  };

  return (
    <>
      <Pagination nextPage={nextPage} previousPage={previousPage} />
      {productsList.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-8 w-full list-none">
          {productsList.map((product) => (
            <li
              key={product.id}
              className="shadow-lg hover:shadow-xl transition rounded-lg bg-white flex-col"
            >
              <div className="h-96 rounded-t-lg overflow-hidden bg-gray-100">
                <img
                  src={
                    product.images.length && product.images[0]
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt={product.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-center p-4">
                <h3 className="mb-4 font-medium text-gray-900">{product.title}</h3>
                <p className="text-gray-500 text-center">{product.description}</p>
                <p className="mt-2 font-medium text-gray-900">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
