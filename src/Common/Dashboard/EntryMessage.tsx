import React from "react";

type props = {
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
};

function EntryMessage({ setShowMessage }: props) {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 bg-DarkBlueColor p-1 text-center font-poppins text-white xs:h-48 xs:w-11/12">
      <p className="text-white xs:text-lg">
        Welcome,{" "}
        <span className="font-bold text-PinkishColor">Username Here</span>
      </p>
      <p className="xs:text-sm">
        Start your fitness journey with just click of a button!
      </p>
      <button
        className="w-28 cursor-pointer bg-PinkishColor p-1 text-sm"
        onClick={() => setShowMessage(false)}
      >
        Start
      </button>
    </div>
  );
}

export default EntryMessage;
