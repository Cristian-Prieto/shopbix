import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { getCardType } from "../utils/utils";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/[^0-9.]/g, "")
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

const normalizeSecurityCode = (value) => {
  return (
    value
      .replace(/[^0-9.]/g, "")
      .replace(/\s/g, "")
      ?.substr(0, 3) || ""
  );
};

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

  const handleCardNumberInputChange = (event) => {
    event.target.value = normalizeCardNumber(event.target.value);
    setNewCard({
      ...newCard,
      cardNumber: event.target.value,
    });
  };

  const handleCardSecurityCodeInputChange = (event) => {
    event.target.value = normalizeSecurityCode(event.target.value);
    setNewCard({
      ...newCard,
      securityCode: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCard.cardNumber.length === 19 && newCard.securityCode.length === 3) {
      addNewCard(newCard);
    }
  };

  const getModalStyleByCreditCard = (cardType) => {
    const types = {
      "American Express":
        "bg-gradient-to-br from-green-500 via-green-400 to-green-500 text-green-900 ",
      Visa: "bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 text-blue-700",
      MasterCard: "bg-gradient-to-br from-red-500 to-orange-500 text-red-800",
    };

    return types[cardType] ?? "";
  };

  const getModalBackgroundImage = (cardType) => {
    const types = {
      "American Express": "/images/americanexpress.png",
      Visa: "/images/visa.png",
      MasterCard: "/images/mastercard.png",
    };

    return types[cardType] ?? "";
  };

  const modalStyle = getModalStyleByCreditCard(getCardType(newCard.cardNumber));
  const backgroundImage = getModalBackgroundImage(
    getCardType(newCard.cardNumber)
  );

  return (
    <div className="flex fixed justify-center items-center z-30 inset-0">
      <div
        onClick={toggleModal}
        className="fixed justify-center items-center z-30 inset-0 bg-black bg-opacity-80"
      ></div>
      <div
        className={`overflow-hidden fixed w-[calc(100vw-2rem)] sm:w-[600px] z-40 p-4 rounded-lg bg-white transition duration-300 ${modalStyle} drop-shadow-sm`}
      >
        <div className="flex justify-between w-full mb-4">
          <span className="text-lg">Add a credit or debit card</span>
          <button onClick={toggleModal}>
            <GrClose />
          </button>
        </div>
        <div className="flex space-x-4 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start w-full"
          >
            <label
              htmlFor="cardNumber"
              className="flex flex-col text-sm mb-4 text-gray-800"
            >
              Card number
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={newCard.cardNumber}
                onChange={handleCardNumberInputChange}
                placeholder="xxxx xxxx xxxx xxxx"
                required
                className="rounded-lg "
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
                className="rounded-lg"
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
                  className="rounded-lg"
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
                  type="text"
                  name="securityCode"
                  id="securityCode"
                  value={newCard.securityCode}
                  onChange={handleCardSecurityCodeInputChange}
                  className=" max-w-[100px] text-center rounded-lg"
                  placeholder="xxx"
                  required
                />
              </div>
            </div>
            <button className="px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white">
              Add your card
            </button>
          </form>
        </div>
        {backgroundImage && (
          <div className="absolute bottom-0 right-0 opacity-30 -z-10">
            <img src={backgroundImage} alt="credit-cards" className="h-full" />
          </div>
        )}
      </div>
    </div>
  );
}
