import { SecondaryInput } from "@/Common/Input/Input";
import { useState } from "react";

type props = {
  setExerciseHandler: (numOfWeeks: string, exerciseSetName: string) => void;
};

const DefaultValidDetails = {
  exerciseSetName: {
    valid: false,
    message: "",
  },
  numOfWeeks: {
    valid: false,
    message: "",
  },
};

function AddExercisePlan({ setExerciseHandler }: props) {
  const [numOfWeeks, setNumOfWeeks] = useState<string>("");
  const [exerciseSetName, setExerciseSetName] = useState<string>("");
  const [validation, setValidation] = useState(DefaultValidDetails);

  return (
    <div className="flex h-2/6 w-10/12 flex-col justify-center gap-1 text-DarkBlueColor xs:text-base">
      <p className="xs:text-base">
        Enter how many weeks your{" "}
        <span className="font-bold text-PinkishColor">exercise schedule</span>{" "}
        will have and the name your{" "}
        <span className="font-bold text-PinkishColor">exercise schedule</span>.
      </p>
      <div className="flex flex-col gap-1">
        <div className="w-[48%]">
          <SecondaryInput
            label="Exercise Set name"
            name="exerciseSetName"
            type="text"
            value={exerciseSetName}
            setValue={setExerciseSetName}
            enableValidation={true}
            validation={validation.exerciseSetName}
            setValidation={setValidation}
          />
        </div>
        <div className="w-[48%]">
          <SecondaryInput
            label="Weeks"
            name="numOfWeeks"
            type="text"
            value={numOfWeeks}
            setValue={setNumOfWeeks}
            enableValidation={true}
            validation={validation.numOfWeeks}
            setValidation={setValidation}
          />
        </div>
      </div>
      <button
        onClick={() => setExerciseHandler(numOfWeeks, exerciseSetName)}
        disabled={
          !validation.exerciseSetName.valid ||
          (!validation.numOfWeeks.valid && true)
        }
        className={`mt-1 w-4/12 cursor-pointer p-1 text-white xs:text-sm ${
          !validation.exerciseSetName.valid || !validation.numOfWeeks.valid
            ? `bg-FadedPinkishColor`
            : `bg-PinkishColor`
        }`}
      >
        Create
      </button>
    </div>
  );
}

export default AddExercisePlan;
