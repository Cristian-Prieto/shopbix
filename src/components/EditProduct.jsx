import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { InputText } from "./InputText";

export function EditProduct() {
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

  const addProductUrl = "https://api.escuelajs.co/api/v1/products/";
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
        <label className="flex flex-col">
          Title
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            className="border-black rounded-md focus:border-yellow-400 focus:ring-yellow-400 "
          />
        </label>
        <label className="flex flex-col">
          Price
          <input
            type="number"
            min={1}
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="rounded-md focus:border-yellow-400 focus:ring-yellow-400 invalid:border-red-500"
          />
        </label>
        <label className="flex flex-col">
          Description
          <textarea
            type="text"
            autoComplete="none"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="rounded-md h-20 break-all focus:border-yellow-400 focus:ring-yellow-400 invalid:border-red-500"
          />
        </label>
        {/* <label>
          Category
          <InputText
            type="text"
            name="categoryId"
            value={newProduct.categoryId}
            onChange={handleInputChange}
          />
        </label> */}
        <button type="submit" className="p-4">
          New Product
        </button>
      </form>
    </div>
  );
}
