import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { GrClose } from "react-icons/gr";

const INITIAL_CREDIT_LIST = [
  {
    id: 0,
    firstName: "Cristian",
    lastName: "Prieto",
    cardNumber: 5555,
    expiresDate: "04/24",
  },
  {
    id: 1,
    firstName: "Julian",
    lastName: "Prieto",
    cardNumber: 8888,
    expiresDate: "12/20",
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

          <div className="flex justify-between items-start gap-4 bg-green-400 py-4">
            <div className="flex items-baseline gap-4 bg-red-100 ">
              <input type="radio" name={list[0].id} className="ml-4" />

              <span>Mastercard</span>

              <div className="flex flex-col max-h-28 sm:h-auto">
                <span className=" bg-zinc-600">ending in 5555</span>
                <span>My card is in U.S. Dollar (USD)</span>
              </div>
            </div>

            <span className="bg-red-400">
              {list[0].firstName}
              {list[0].lastName}
            </span>

            <span>55/2055</span>
          </div>
          <div className="flex justify-between items-start gap-4 bg-purple-400 py-4">
            <div className="flex gap-4 items-baseline bg-red-100 ">
              <input type="radio" name={list[1].id} className="ml-4" />

              <span>Mastercard</span>

              <div className="flex flex-col">
                <span className=" bg-zinc-600">ending in 5555</span>
                <span> My card is in U.S. Dollar (USD)</span>
              </div>
            </div>

            <span className="bg-red-400">
              {list[1].firstName}
              {list[1].lastName}
            </span>

            <span>55/2055</span>
          </div>
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
                  {modal && (
                    <div className="fixed justify-center items-center z-30 inset-0">
                      <div
                        onClick={toggleModal}
                        className="fixed justify-center items-center z-30 inset-0 bg-black bg-opacity-80"
                      ></div>
                      <div className="fixed top-20 left-10 z-40 p-4 rounded-lg bg-white">
                        <div className="flex justify-between w-full mb-8">
                          <span className="text-lg pl-4">
                            Add a credit or debit card
                          </span>
                          <button onClick={toggleModal}>
                            <GrClose />
                          </button>
                        </div>
                        <div className="flex space-x-4">
                          <form
                            onClick={() =>
                              setList(list, {
                                id: 0,
                                firstName: "Cristian",
                                lastName: "Prieto",
                                cardNumber: 5555,
                                expiresDate: "04/24",
                              })
                            }
                            className="flex flex-col w-80 sm:w-full p-4 sm:border-r-2 border-gray-300"
                          >
                            <div className="relative z-0 mb-6 w-full group">
                              <input
                                type="number"
                                name="cardNumber"
                                id="cardNumber"
                                value=""
                                onChange=""
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
                                name="name"
                                value=""
                                onChange=""
                                id="name"
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
                                type="date"
                                name="expirationDate"
                                id="expirationDate"
                                value=""
                                onChange=""
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
                            <h2>
                              Shopbix accepts all major credit and debit cards:
                            </h2>
                            <img
                              src="/images/cards.jpg"
                              alt="credit-cards"
                              className="h-40 contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

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
