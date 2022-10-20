import { useState } from "react";
import { IExerciseSchedule, IExerciseSet } from "Typescript/Interface";
import AddExercisePlan from "./AddExercisePlan";
import CustomizeExercises from "./CustomizeExercises";
import CustomizeExerciseLogic from "@/logic/CustomizeExerciseLogic";

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
      <div className="flex h-full flex-col gap-3 font-poppins">
        <button
          className="absolute right-2 z-10 rounded-md border border-DarkBlueColor p-0.5 px-1 text-DarkBlueColor xs:text-sm"
          onClick={() => setExerciseCreateType("")}
        >
          Cancel
        </button>
        <div className="flex h-full items-center justify-center">
          {!showCustomizeExerciseCard ? (
            <AddExercisePlan setExerciseHandler={setExerciseHandler} />
          ) : (
            <CustomizeExercises
              exerciseSet={exerciseSet}
              setExerciseSet={setExerciseSet}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Customize;
