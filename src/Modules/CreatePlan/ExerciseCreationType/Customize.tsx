import CustomizeExerciseLogic from "@/logic/CustomizeExerciseLogic";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { IExerciseSchedule, IExerciseSet } from "Typescript/Interface";
import Pagination from "../Pagination";
import AddExercise from "./AddExercise";
import CustomizeExerciseCard from "./CustomizeExerciseCard";
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

  // Refs
  const divRef = useRef<HTMLDivElement>(null);

  // States
  const [exerciseSet, setExerciseSet] = useState<IExerciseSet>(
    ExerciseSetDefaultValues
  );
  const [numOfWeeks, setNumOfWeeks] = useState<string>("");
  const [exerciseSetName, setExerciseSetName] = useState<string>("");
  const [showCustomizeExerciseCard, setShowCustomizeExerciseCard] =
    useState<boolean>(false);
  const [pagination, setPagination] = useState<number>(0);

  const [showPopUpAddExercise, setShowPopUpAddExercise] =
    useState<boolean>(false);

  const setExerciseHandler = () => {
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
            <div className="flex h-2/6 w-10/12 flex-col justify-center gap-1 text-DarkBlueColor xs:text-base">
              <p className="xs:text-base">
                Enter how many weeks your{" "}
                <span className="font-bold text-PinkishColor">
                  exercise schedule
                </span>{" "}
                will have and the name your{" "}
                <span className="font-bold text-PinkishColor">
                  exercise schedule
                </span>
                .
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <label>Exercise Set name:</label>
                  <input
                    type="string"
                    name="exerciseSetName"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setExerciseSetName(e.target.value)
                    }
                    value={exerciseSetName}
                    className="w-5/12 rounded-lg bg-DarkBlueColor p-2 font-poppins text-white xs:text-xs"
                    placeholder="Exercise set name"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Weeks:</label>
                  <input
                    type="string"
                    name="weeks"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNumOfWeeks(e.target.value)
                    }
                    value={numOfWeeks}
                    className="w-5/12 rounded-lg bg-DarkBlueColor p-2 font-poppins text-white xs:text-xs"
                    placeholder="Number of weeks"
                  />
                </div>
              </div>
              <button
                onClick={() => setExerciseHandler()}
                className="mt-1 w-4/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm"
              >
                Create
              </button>
            </div>
          ) : (
            <div className="flex h-[100%] w-full flex-col items-center justify-between">
              <div className="flex h-[80%] w-full flex-col gap-3">
                <CustomizeExerciseCard
                  Week={exerciseSet.Schedules[pagination].Week}
                  ExerciseSchedule={
                    exerciseSet.Schedules[pagination].ExerciseSchedule
                  }
                  refProp={divRef}
                />
              </div>
              <button
                className="w-4/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm"
                onClick={() => setShowPopUpAddExercise(true)}
              >
                Add
              </button>
              <Pagination
                setPage={setPagination}
                maxPage={exerciseSet.Schedules.length}
                currentPage={pagination}
                pageTitle={`Week ${pagination + 1}`}
                refProp={divRef.current}
              />
            </div>
          )}
          {/* <div className="h-[65%] overflow-auto border"></div> */}
          {/* this is going to be a pop up */}
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showPopUpAddExercise && (
          <AddExercise setShowPopUpAddExercise={setShowPopUpAddExercise} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Customize;
