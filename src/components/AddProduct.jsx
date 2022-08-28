import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddProduct() {
  const INITIAL_PRODUCT = {
    title: "",
    price: 1,
    description: "",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  };
  const [newProduct, setNewProduct] = useState(INITIAL_PRODUCT);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const addProductUrl =
    "https://fake-api-shopping-backend.onrender.com/api/v1/products";
  const addNewProduct = (event) => {
    event.preventDefault();
    fetch(addProductUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        navigate(`/product/${jsonData.id}`, { replace: true });
      });
  };

  return (
    <div className="flex flex-col flex-1 align-middle justify-center">
      <form
        onSubmit={addNewProduct}
        className="flex flex-col w-96 p-8 shadow-lg rounded-lg bg-white"
      >
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="title"
            id="title"
            value={newProduct.title}
            onChange={handleInputChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price (USD)
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <textarea
            type="text"
            name="description"
            id="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white"
        >
          New Product
        </button>
      </form>
    </div>
  );
}
