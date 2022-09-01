import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Modal } from "./Modal";
import { GrClose } from "react-icons/gr";
import { getCardType } from "../utils/utils";

const INITIAL_CREDIT_LIST = [
  {
    fullName: "Cristian Prieto",
    cardNumber: 3323232323,
    expirationDate: "2024-12",
  },
  {
    fullName: "Julian Prieto",
    cardNumber: 42223232323,
    expirationDate: "2023-12",
  },
];
export function Payment() {
  const { cart } = useAppContext();
  const [list, setList] = useState(INITIAL_CREDIT_LIST);
  const [modal, setModal] = useState(false);
  const [spotlight, setSpotLight] = useState(list[0]);
  const totalPrice = cart.reduce(
    (accumulator, current) =>
      accumulator + current.count * current.product.price,
    0
  );
  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };
  const addNewCard = (card) => {
    const cardAlreadyExist = list.find(
      (item) => item.cardNumber === card.cardNumber
    );
    if (!cardAlreadyExist) {
      setList((prevState) => [...prevState, card]);
      toggleModal();
    }
    return;
  };

  const removeItem = (card) => {
    setList((prevState) =>
      prevState.filter((item) => item.cardNumber !== card.cardNumber)
    );
  };
  useEffect(() => {
    if (modal) {
      document.body.style = "overflow: hidden;";
    }
    return () => {
      document.body.style = "";
    };
  }, [modal]);

  return (
    <div className="flex sm:w-full h-auto my-8 sm:p-4">
      <div className="flex flex-col-reverse  lg:flex-row  flex-1 shadow-lg rounded-lg lg:space-x-8 bg-white">
        <div className="flex flex-1 flex-col space-y-4 p-4">
          <h1 className="text-xl font-semibold mb-4">
            Select a payment method
          </h1>
          <h2 className="font-semibold text-gray-700">
            Your credit and debit cards
          </h2>
          <div className="hidden sm:flex w-full justify-end font-semibold pr-4">
            <span className="text-center w-28 opacity-60">Name on card</span>
            <span className="text-center w-28 opacity-60">Expires on</span>
          </div>
          {list && (
            <div className="space-y-4">
              {list.map((item) => (
                <label
                  key={item.cardNumber}
                  className={`flex  justify-between items-center  gap-4 shadow-md rounded-xl p-4 ${
                    spotlight === item
                      ? "text-black bg-yellow-400"
                      : "text-gray-500 transition duration-300 hover:bg-slate-50"
                  }`}
                  onClick={() => setSpotLight(item)}
                >
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center sm:gap-8 space-x-4">
                      <input
                        type="radio"
                        name="container"
                        className="sm:ml-4 bg-white focus:ring-2 focus:ring-white text-black focus:ring-offset-gray-700 "
                      />
                      <span className="text-center w-20">
                        {getCardType(item.cardNumber)}
                      </span>
                      <div className="flex flex-col max-h-28 sm:h-auto">
                        <span className="pr-4">
                          ending in {String(item.cardNumber).slice(-4)}
                        </span>
                        <span className="hidden lg:block">
                          My card is in U.S. Dollar (USD)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className=" sm:text-right sm:pr-4">
                        {item.fullName}
                      </span>
                      <span className=" text-center ">
                        {item.expirationDate}
                      </span>
                    </div>
                  </div>

                  <button onClick={() => removeItem(item)}>
                    <GrClose />
                  </button>
                </label>
              ))}
            </div>
          )}

          <div className="flex flex-1 flex-col shadow-lg rounded-lg">
            <h2 className="text-lg text-center sm:text-left font-semibold p-4 mb-4 rounded-t-xl text-gray-700 bg-yellow-400">
              More payment methods
            </h2>
            <div className="flex flex-col items-center sm:items-stretch">
              <h2 className="pl-4">Credit or debit cards:</h2>
              <div className="flex flex-col sm:flex-row justify-between ">
                <div className="flex flex-col place-content-center w-full">
                  <span className="flex justify-center mb-4">
                    Shopbix accepts major credit and debit cards.
                  </span>
                  <button
                    onClick={toggleModal}
                    className=" max-w-md px-4 py-2 m-4 sm:mx-auto uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30"
                  >
                    Add a credit or debit card
                  </button>
                </div>
                {modal && (
                  <Modal toggleModal={toggleModal} addNewCard={addNewCard} />
                )}
                <div>
                  <img
                    src="/images/cards.jpg"
                    alt="credit-cards"
                    className="mx-auto my-4 sm:m-0 sm:p-4  h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-4">
          <div className="flex flex-col w-full max-h-52 text-center items-center my-4 lg:w-56 shadow-lg rounded-xl hover:bg-yellow-500 hover:shadow-xl transition duration-300 bg-yellow-400">
            <button className="max-w-md px-4 py-2 m-4 lg:mt-4 font-semibold sm:mx-auto uppercase shadow-md lg:mb-auto rounded-xl bg-white transition hover:bg-green-600 hover:text-yellow-100">
              Pay
            </button>
            <div className="flex flex-col items-center mb-4  md:mb-8">
              <span className="w-full">
                Card selected: {getCardType(spotlight.cardNumber)}
              </span>
              <span className="w-full">
                ending in: {String(spotlight.cardNumber).slice(-4)}
              </span>
              <span className="w-full font-semibold">
                Total to pay : ${totalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
