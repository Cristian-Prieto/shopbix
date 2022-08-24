// import { useNavigate } from "react-router-dom";
// export function DeleteFromApi({ id }) {
//   const navigate = useNavigate();
//   const deleteProductUrl = `https://api.escuelajs.co/api/v1/products/${id}`;
//   const DeleteProduct = () => {
//     fetch(deleteProductUrl, { method: "DELETE" })
//       .then((response) => console.log(response.json(response)))
//       .then((jsonData) => {
//         navigate(`/edit/`, { replace: true });
//       });
//   };

//   return <button onClick={DeleteProduct}>Delete post</button>;
// }
