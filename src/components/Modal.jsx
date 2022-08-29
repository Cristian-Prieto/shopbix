import { useState } from "react";
import { GrClose } from "react-icons/gr";
export function Modal({ toggleModal, addNewCard }) {
  const [newCard, setNewCard] = useState({
    id: 0,
    fullName: "",
    cardNumber: 5555,
    expirationDate: "2022-08",
  });

  const handleInputChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
    console.log(newCard);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewCard(newCard);
  };

  const getModalCardStyle = () => {
    if (String(newCard.cardNumber).slice(0, 3) === 2424) return "green";
  };

  return (
    <div className="flex fixed justify-center items-center z-30 inset-0">
      <div
        onClick={toggleModal}
        className="fixed justify-center items-center z-30 inset-0 bg-black bg-opacity-80"
      ></div>
      <div className={`fixed z-40 p-4 rounded-lg bg-${getModalCardStyle}-300`}>
        <div className="flex justify-between w-full mb-8">
          <span className="text-lg pl-4">Add a credit or debit card</span>
          <button onClick={toggleModal}>
            <GrClose />
          </button>
        </div>
        <div className="flex space-x-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-80 sm:w-full p-4 sm:border-r-2 border-gray-300"
          >
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                value={newCard.cardNumber}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="cardNumber"
                className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Card number
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="fullName"
                value={newCard.fullName}
                onChange={handleInputChange}
                id="fullName"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name on card
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="month"
                name="expirationDate"
                id="expirationDate"
                value={newCard.expirationDate}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="expirationDate"
                className="peer-focus:font-medium absolute text-sm text-gray-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Expiration date
              </label>
            </div>
            <button className="mt-8 px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white">
              Add your card
            </button>
          </form>
          <div className="hidden sm:flex flex-col items-baseline h-full align-middle justify-center place-content-center m-auto space-y-4">
            <h2>Shopbix accepts all major credit and debit cards:</h2>
            <img
              src="/images/cards.jpg"
              alt="credit-cards"
              className="h-40 contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
