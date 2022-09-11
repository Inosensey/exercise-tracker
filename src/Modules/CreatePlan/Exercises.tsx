import { useState } from "react";
import AutoGenerate from "./ExerciseCreationType/AutoGenerate";
import Customize from "./ExerciseCreationType/Customize";

function Exercises() {
  const [exerciseCreateType, setExerciseCreateType] = useState<string>("");
  return (
    <div className="h-[100%] overflow-auto font-poppins">
      {exerciseCreateType === "" && (
        <>
          <h1 className="text-black xs:text-xs">
            How do you want to create your exercises? <br /> We can{" "}
            <span className="font-bold text-PinkishColor">generate</span> it for
            you base on your BMI or you can customize your own.
          </h1>
          <div className="mt-9 flex flex-col items-center gap-5 xs:text-sm">
            <button
              onClick={() => setExerciseCreateType("Generate")}
              className="w-5/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white"
            >
              Generate
            </button>
            <button
              onClick={() => setExerciseCreateType("Customize")}
              className="w-5/12 cursor-pointer bg-DarkBlueColor p-1 font-bold text-white"
            >
              Customize
            </button>
          </div>
        </>
      )}
      {exerciseCreateType === "Generate" && (
        <AutoGenerate setExerciseCreateType={setExerciseCreateType} />
      )}
      {exerciseCreateType === "Customize" && (
        <Customize setExerciseCreateType={setExerciseCreateType} />
      )}
    </div>
  );
}

export default Exercises;