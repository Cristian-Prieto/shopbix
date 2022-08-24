import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "./InputText";

export function EditProduct() {
  const INITIAL_PRODUCT = {
    title: "",
    price: 0,
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
    <>
      <form onSubmit={addNewProduct}>
        <label>
          Title
          <InputText
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price
          <InputText
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description
          <InputText
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
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
        <button type="submit">New Product</button>
      </form>
    </>
  );
}
