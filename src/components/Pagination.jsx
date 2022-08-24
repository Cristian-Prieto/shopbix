export function Pagination({
  currentPage,
  isFirstPage,
  previousPage,
  nextPage,
  isLastPage,
}) {
  return (
    <div className=" flex justify-between items-center w-60 gap-4 my-12">
      <button
        disabled={isFirstPage}
        onClick={previousPage}
        className="px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white"
      >
        prev
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={nextPage}
        disabled={isLastPage}
        className="px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white"
      >
        next
      </button>
    </div>
  );
}
