import { Link } from "react-router-dom";
import { AddToCart } from "./AddToCart";

export function Product({ product }) {
  return (
    <li
      key={product.id}
      className="flex flex-col shadow-lg hover:shadow-xl transition rounded-lg bg-white"
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
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="flex flex-1 flex-col items-center  p-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-lg mb-4  text-gray-900">
              {product.title}
            </h3>
          </Link>

          <p className=" text-center text-gray-500">{product.description}</p>
        </div>
        <span className="mt-2 mb-8 text-gray-900">${product.price}</span>
        <AddToCart product={product} />
      </div>
    </li>
  );
}
