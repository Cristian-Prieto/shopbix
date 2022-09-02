import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="h-[calc(100vh-9rem)] w-screen relative overflow-hidden">
      <div className="absolute flex flex-col items-center w-full top-1/3 text-3xl z-10 text-white">
        <h1 className="flex place-items-center">
          <span className="m-4 font-semibold text-yellow-300">Everything</span>
          <span>you</span>
          <span className="font-semibold pl-4 text-white">NEED</span>
        </h1>

        <button className="text-2xl px-4 py-2 shadow-xl rounded-xl bg-white transition text-gray-800 hover:bg-yellow-300">
          <Link to="/list">Start buying!</Link>
        </button>
      </div>
      <div className="absolute inset-0 ">
        <img
          src="/images/background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
