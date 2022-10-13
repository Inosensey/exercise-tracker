import CustomizeExerciseLogic from "@/logic/CustomizeExerciseLogic";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { IExerciseSchedule, IExerciseSet } from "Typescript/Interface";
import Pagination from "../Pagination";
import AddExercise from "./AddExercise";
import AddExercisePlan from "./AddExercisePlan";
import CustomizeExerciseCard from "./CustomizeExerciseCard";
import CustomizeExercises from "./CustomizeExercises";
import ExerciseCard from "./ExerciseCard";

type props = {
  setExerciseCreateType: React.Dispatch<React.SetStateAction<string>>;
};

// Default Values
const ExerciseSetDefaultValues: IExerciseSet = {
  SetName: "",
  Schedules: [],
};

function Customize({ setExerciseCreateType }: props) {
  //Deconstruct Logic
  const { SetExerciseWeeks } = CustomizeExerciseLogic();

  // States
  const [exerciseSet, setExerciseSet] = useState<IExerciseSet>(
    ExerciseSetDefaultValues
  );
  const [showCustomizeExerciseCard, setShowCustomizeExerciseCard] =
    useState<boolean>(false);
  const [showPopUpAddExercise, setShowPopUpAddExercise] =
    useState<boolean>(false);

  const setExerciseHandler = (numOfWeeks: string, exerciseSetName: string) => {
    const ExerciseSchedule: IExerciseSchedule[] = SetExerciseWeeks(
      parseInt(numOfWeeks)
    );
    setExerciseSet({
      SetName: exerciseSetName,
      Schedules: ExerciseSchedule,
    });
    setShowCustomizeExerciseCard(true);
  };

  return (
    <>
      <div className="relative flex h-full flex-col gap-3 font-poppins">
        <button
          className="absolute right-2 z-10 rounded-md border border-DarkBlueColor p-0.5 px-1 text-DarkBlueColor xs:text-sm"
          onClick={() => setExerciseCreateType("")}
        >
          Cancel
        </button>
        <div className="relative flex h-full items-center justify-center">
          {!showCustomizeExerciseCard ? (
            <AddExercisePlan setExerciseHandler={setExerciseHandler} />
          ) : (
            <CustomizeExercises
              exerciseSet={exerciseSet}
              setShowPopUpAddExercise={setShowPopUpAddExercise}
            />
          )}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showPopUpAddExercise && (
          <AddExercise
            setShowPopUpAddExercise={setShowPopUpAddExercise}
            ExerciseSchedules={exerciseSet.Schedules}
            setExerciseSet={setExerciseSet}
            exerciseSet={exerciseSet}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Customize;
