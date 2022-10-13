import { useState } from "react";

type props = {
    setExerciseHandler: (numOfWeeks: string, exerciseSetName: string) => void
}

function AddExercisePlan({setExerciseHandler}:props) {
    const [numOfWeeks, setNumOfWeeks] = useState<string>("");
    const [exerciseSetName, setExerciseSetName] = useState<string>("");

  return (
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
                    onBlur={() => console.log("Not focused")}
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
                onClick={() => setExerciseHandler(numOfWeeks, exerciseSetName)}
                className="mt-1 w-4/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm"
              >
                Create
              </button>
            </div>
  )
}

export default AddExercisePlan