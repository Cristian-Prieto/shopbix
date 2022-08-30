import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
export function Modal({ toggleModal, addNewCard }) {
  const [newCard, setNewCard] = useState({
    type: "",
    fullName: "",
    cardNumber: "",
    expirationDate: "2022-08",
    securityCode: "",
  });

  const handleInputChange = (event) => {
    setNewCard({
      ...newCard,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewCard(newCard);
  };

  const getCardType = (number) => {
    if (String(number).slice(0) === "3") return "American express";
    if (String(number).slice(0) === "4") return "Visa";
    if (String(number).slice(0) === "5") return "Master card";
  };

  useEffect(() => {
    getCardType(newCard.cardNumber);
  }, [newCard]);

  return (
    <div className="flex fixed justify-center items-center z-30 inset-0">
      <div
        onClick={toggleModal}
        className="fixed justify-center items-center z-30 inset-0 bg-black bg-opacity-80"
      ></div>
      <div className={`fixed z-40 p-4 rounded-lg bg-green-500`}>
        <div className="flex justify-between w-full mb-4">
          <span className="text-lg">Add a credit or debit card</span>
          <button onClick={toggleModal}>
            <GrClose />
          </button>
        </div>
        <div className="flex space-x-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start max-w-sm sm:w-full  "
          >
            <label
              htmlFor="cardNumber"
              className="flex flex-col text-sm mb-4 text-gray-800"
            >
              Card number
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                value={newCard.cardNumber}
                onChange={handleInputChange}
                placeholder="xxxx xxxx xxxx xxxx"
                required
              />
            </label>
            <label
              htmlFor="fullName"
              className="flex flex-col text-sm mb-4 text-gray-800"
            >
              Cardholder name
              <input
                type="text"
                name="fullName"
                value={newCard.fullName}
                onChange={handleInputChange}
                id="fullName"
                placeholder="Name on card"
                required
              />
            </label>
            <div className="flex justify-between w-full mb-4">
              <label
                htmlFor="expirationDate"
                className="flex flex-col text-sm text-gray-800"
              >
                Expiration date
                <input
                  type="month"
                  name="expirationDate"
                  id="expirationDate"
                  value={newCard.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY Expires"
                  className="flex"
                  required
                />
              </label>
              <div className="flex flex-col items-end">
                <label
                  htmlFor="securityCode"
                  className="flex flex-col text-center text-sm text-gray-800"
                >
                  Security code
                </label>
                <input
                  type="number"
                  name="securityCode"
                  id="securityCode"
                  value={newCard.securityCode}
                  onChange={handleInputChange}
                  className=" max-w-[100px] text-center"
                  placeholder="xxx"
                  required
                />
              </div>
            </div>
            <button className="px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white">
              Add your card
            </button>
          </form>
          <div className="hidden sm:flex flex-col h-full p-4 m-auto">
            <h2 className="text-left max-w-[200px]">
              Shopbix accepts all major credit and debit cards:
            </h2>
            <img
              src="/images/cards.jpg"
              alt="credit-cards"
              className="h-36 cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
