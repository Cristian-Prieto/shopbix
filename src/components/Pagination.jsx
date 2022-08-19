export function Pagination({ previousPage, nextPage }) {
  return (
    <div className="flex-1 flex justify-center items-center gap-4 mt-4">
      <button
        onClick={previousPage}
        className="px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300"
      >
        prev
      </button>
      <button
        onClick={nextPage}
        className="px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300"
      >
        next
      </button>
    </div>
  );
}
