import Input from "@/Common/Input/Input";
import React, { useState } from "react";

import CalCulateBmiLogic from "../../Logic/CalculateBmiLogic";

type props = {
  setBmi: React.Dispatch<React.SetStateAction<number>>;
  bmi: number;
};

function CalculateBMI({ setBmi, bmi }: props) {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  return (
    <div className="h-full font-poppins">
      <h1 className="font-bold text-black xs:text-xs">
        First, let's calculate your BMI so we can know the best plan for you
      </h1>
      <div className="h-[90%] pt-1">
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-1.5">
            <label className="font-poppins font-bold text-black xs:text-sm">
              Height (Cm)
            </label>
            <input
              className="w-full rounded-lg bg-DarkBlueColor p-2 font-poppins text-white xs:text-xs"
              type="number"
              name="height"
              value={height}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <label className="font-poppins font-bold text-black xs:text-sm">
              Weight (Kg)
            </label>
            <input
              className="w-full rounded-lg bg-DarkBlueColor p-2 font-poppins text-white xs:text-xs"
              type="number"
              name="weight"
              value={weight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black xs:text-base">
              <span className="font-bold">Result:</span> {bmi} BMI
            </p>
          </div>
        </div>
        <button
          className="mt-6 w-5/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm"
          onClick={() => {
            const bmi = CalCulateBmiLogic(height, weight);
            setBmi(bmi);
          }}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

export default CalculateBMI;
