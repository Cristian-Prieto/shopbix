import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Modal } from "./Modal";

const INITIAL_CREDIT_LIST = [
  {
    id: 0,
    fullName: "Cristian Prieto",

    cardNumber: 2332325555,
    expirationDate: "04/24",
  },
  {
    id: 1,
    fullName: "Julian Prieto",

    cardNumber: 8888,
    expirationDate: "12/20",
  },
];
export function Payment() {
  const [list, setList] = useState(INITIAL_CREDIT_LIST);
  const [modal, setModal] = useState(false);
  const { cart } = useAppContext();
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
        <div className="flex flex-1 flex-col p-4">
          <h1 className="text-lg font-semibold mb-4">
            Select a payment method
          </h1>
          <h2>Your credit and debit cards</h2>
          <div className="flex w-full justify-end gap-4 bg-red-700">
            <span className="opacity-60">Name on card</span>
            <span className="opacity-60">Expires on</span>
          </div>
          {list && (
            <ul>
              {list.map((item) => (
                <li
                  key={item.cardNumber}
                  className="flex justify-between items-start gap-4 bg-green-400 py-4"
                >
                  <div className="flex items-baseline gap-4 bg-red-100 ">
                    <input type="radio" className="ml-4" />
                    <span>Mastercard</span>
                    <div className="flex flex-col max-h-28 sm:h-auto">
                      <span className=" bg-zinc-600">
                        ending in {String(item.cardNumber).slice(-4)}
                      </span>
                      <span>My card is in U.S. Dollar (USD)</span>
                    </div>
                  </div>
                  <span className="bg-red-400">{item.fullName}</span>
                  <span>{item.expirationDate}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-1 flex-col p-4 bg-blue-400">
            <h2>More payment methods</h2>
            <div className="flex flex-col bg-slate-400">
              <h2>Credit or debit cards</h2>
              <div className="flex justify-between bg-green-400">
                <div className="flex flex-col place-content-center">
                  <span>Shopbix accepts major credit and debit cards.</span>
                  <button onClick={toggleModal} className="bg-white">
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
                    className="h-32 contain"
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
            <span>Card selected:</span>
          </div>
        </div>
      </div>
    </div>
  );
}
