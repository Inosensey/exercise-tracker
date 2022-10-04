import { Triangle } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Triangle
          height="45"
          width="45"
          color="#ff7777"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className="font-poppins">Loading</p>
      </div>
    </div>
  );
}

export default Loading;
