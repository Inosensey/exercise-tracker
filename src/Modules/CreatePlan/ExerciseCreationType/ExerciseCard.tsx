import React from "react";
import Exercise from "./Exercise";

function ExerciseCard() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-center font-bold text-GrayishColor underline xs:text-lg">
        Week 1
      </h3>
      <h3 className="font-bold text-DarkBlueColor underline xs:text-base">
        Day here
      </h3>
      <div className="flex flex-col gap-1 font-poppins">
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </div>
    </div>
  );
}

export default ExerciseCard;
