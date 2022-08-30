import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Modal } from "./Modal";
import { GrClose } from "react-icons/gr";

const INITIAL_CREDIT_LIST = [
  {
    type: "nada",
    fullName: "Cristian Prieto",
    cardNumber: 0,
    expirationDate: "2024-12",
  },
  {
    type: "nada",
    fullName: "Julian Prieto",
    cardNumber: 12,
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
  console.log(spotlight.type);
  console.log(list);

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
    <div className="flex w-full h-auto my-8 p-4">
      <div className="flex flex-col-reverse sm:flex-row flex-1 shadow-lg rounded-lg bg-white">
        <div className="flex flex-1 flex-col space-y-4 p-4">
          <h1 className="text-lg font-semibold mb-4">
            Select a payment method
          </h1>
          <h2 className="font-semibold text-gray-700">
            Your credit and debit cards
          </h2>
          <div className="hidden sm:flex w-full justify-end font-semibold gap-4 pr-12">
            <span className="text-center w-32 opacity-60">Name on card</span>
            <span className="text-center w-32 opacity-60">Expires on</span>
          </div>
          {list && (
            <div className="space-y-4">
              {list.map((item) => (
                <label
                  key={item.cardNumber}
                  className={`flex justify-between items-center gap-4 rounded-md p-4 ${
                    spotlight === item
                      ? "text-black bg-yellow-400"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSpotLight(item)}
                >
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center gap-8">
                      <input
                        type="radio"
                        name="container"
                        className="ml-4 bg-white focus:ring-2  focus:ring-white text-black focus:ring-offset-gray-700"
                      />
                      <span>{item.type}</span>
                      <div className="flex flex-col max-h-28 sm:h-auto">
                        <span>
                          ending in {String(item.cardNumber).slice(-4)}
                        </span>
                        <span className="hidden md:block">
                          My card is in U.S. Dollar (USD)
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <span className=" text-right pr-4">{item.fullName}</span>
                      <span className="w-32 text-center ">
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

          <div className="flex flex-1 flex-col p-4  shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 bg-yellow-400">
              More payment methods
            </h2>
            <div className="flex flex-col">
              <h2>Credit or debit cards</h2>
              <div className="flex justify-between ">
                <div className="flex flex-col place-content-center w-full">
                  <span className="flex justify-center ">
                    Shopbix accepts major credit and debit cards.
                  </span>
                  <button
                    onClick={toggleModal}
                    className=" max-w-md px-4 py-2 mx-auto uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30"
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
                    className="h-40 contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-4 bg-red-200">
          <div className="flex flex-col w-full items-center  bg-orange-400">
            <button>Pay</button>
            <span>Total to pay : ${totalPrice}</span>
            <span>Card selected: {}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
