import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Gallery } from "./Gallery";
import { AddToCart } from "./AddToCart";
// import { DeleteFromApi } from "./DeleteFromApi";

export function ProductDetail() {
  const [productInfo, setProductInfo] = useState();
  const { id } = useParams();

  const getProductUrl = `https://api.escuelajs.co/api/v1/products/${id}`;
  useEffect(() => {
    fetch(getProductUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setProductInfo(jsonData);
      })
      .catch((err) => console.log(err));
  }, [getProductUrl]);

  return (
    productInfo && (
      <div className="container mx-auto">
        <h2 className="md:hidden font-poppins font-bold text-3xl w-full text-center my-8">
          {productInfo.title}
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[500px_1fr] md:p-16 ">
          <Gallery images={productInfo.images} />
          <div className="flex flex-col text-center gap-4 px-8 py-4">
            <div className="flex flex-col gap-4 mb-12">
              <h2 className="hidden md:block  font-poppins font-bold text-2xl">
                {productInfo.title}
              </h2>
              <p>{productInfo.description}</p>
              <span>${productInfo.price}</span>
            </div>

            <AddToCart product={productInfo} />
          </div>
        </div>
        {/* <DeleteFromApi id={id} /> */}
      </div>
    )
  );
}
