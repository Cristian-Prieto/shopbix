import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function ProductDetail() {
  const [productInfo, setProductInfo] = useState();
  const { id } = useParams();
  const getProductUrl = `https://api.escuelajs.co/api/v1/products/${id}`;
  useEffect(() => {
    fetch(getProductUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setProductInfo(jsonData);
        console.log(jsonData);
      })
      .catch((err) => console.log(err));
  }, [getProductUrl]);

  return (
    productInfo && (
      <>
        <span className="">{productInfo.title}</span>

        <div className="flex flex-col  md:flex-row">
          <section className="flex md:flex-col">
            <div className="flex  place-content-center">
              <img
                src={
                  !productInfo.images.length
                    ? "https://via.placeholder.com/150"
                    : productInfo.images[0]
                }
                alt={productInfo.title}
                className="flex-1 md:object-contain object-cover"
              />
            </div>
            <div className="flex  md:flex-col place-content-center ">
              <img
                src={
                  !productInfo.images.length
                    ? "https://via.placeholder.com/150"
                    : productInfo.images[1]
                }
                alt={productInfo.title}
                className="flex-1 md:object-contain object-cover"
              />
            </div>
            <div className="flex  md:flex-col place-content-center ">
              <img
                src={
                  !productInfo.images.length
                    ? "https://via.placeholder.com/150"
                    : productInfo.images[2]
                }
                alt={productInfo.title}
                className="flex-1 md:object-contain object-cover "
              />
            </div>
          </section>
          <section>
            <div className="flex place-content-center">
              <img
                src={
                  !productInfo.images.length
                    ? "https://via.placeholder.com/450"
                    : productInfo.images[0]
                }
                alt={productInfo.title}
                className="flex-1 object-cover "
              />
            </div>
          </section>
        </div>
        <p>{productInfo.description}</p>
        <span>${productInfo.price}</span>

        {/* <div className="flex w-full bg-red-600">
          <div className="flex flex-col w-full md:flex-row ">
            <div className="flex flex-col md:flex-row ">
              <div className="flex justify-center md:flex-col h-20 md:w-40 md:h-full sm:h-full">
                <div className="flex  place-content-center">
                  <img
                    src={
                      !productInfo.images.length
                        ? "https://via.placeholder.com/150"
                        : productInfo.images[0]
                    }
                    alt={productInfo.title}
                    className="flex-1 md:object-contain object-cover"
                  />
                </div>
                <div className="flex  md:flex-col place-content-center ">
                  <img
                    src={
                      !productInfo.images.length
                        ? "https://via.placeholder.com/150"
                        : productInfo.images[1]
                    }
                    alt={productInfo.title}
                    className="flex-1 md:object-contain object-cover"
                  />
                </div>
                <div className="flex  md:flex-col place-content-center ">
                  <img
                    src={
                      !productInfo.images.length
                        ? "https://via.placeholder.com/150"
                        : productInfo.images[2]
                    }
                    alt={productInfo.title}
                    className="flex-1 md:object-contain object-cover "
                  />
                </div>
              </div>
              <div className="flex place-content-center">
                <img
                  src={
                    !productInfo.images.length
                      ? "https://via.placeholder.com/450"
                      : productInfo.images[0]
                  }
                  alt={productInfo.title}
                  className="flex-1 object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        <p>{productInfo.description}</p>
        <span>${productInfo.price}</span> */}
      </>
    )
  );
}
