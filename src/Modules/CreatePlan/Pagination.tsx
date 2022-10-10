type props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number | undefined;
  currentPage: number;
  pageTitle: string;
  refProp: HTMLDivElement | null;
};

function Pagination({
  setPage,
  maxPage,
  currentPage,
  pageTitle,
  refProp,
}: props) {
  const nextPage = () => {
    if (currentPage === maxPage! - 1) return;
    setPage((prev) => prev + 1);
    if (refProp !== null) {
      console.log(refProp);
      refProp!.scrollIntoView({ behavior: "smooth" });
    }
  };
  const prevPage = () => {
    if (currentPage === 0) return;
    setPage((prev) => prev - 1);
    if (refProp !== null) {
      console.log(refProp);
      refProp!.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center justify-center gap-3 font-poppins">
      <button
        className="cursor-pointer bg-DarkBlueColor py-1 px-2 text-white xs:text-sm"
        onClick={() => prevPage()}
      >
        Prev
      </button>
      <p className="font-bold xs:text-sm">{pageTitle}</p>
      <button
        className="cursor-pointer bg-DarkBlueColor py-1 px-2 text-white xs:text-sm"
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
