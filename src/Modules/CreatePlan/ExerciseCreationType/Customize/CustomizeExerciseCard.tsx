import { IExercisePerDay } from "Typescript/Interface";
import { ExerciseType } from "Typescript/Types";
import Exercise from "../Exercise";

type props = {
  ExerciseSchedule: IExercisePerDay[] | undefined;
  Week: number;
  refProp: React.Ref<HTMLDivElement>;
  setShowPopUpExerciseForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFormAction: React.Dispatch<React.SetStateAction<string>>;
  setSelectedExercise: React.Dispatch<React.SetStateAction<IExercisePerDay>>;
};

function CustomizeExerciseCard({
  ExerciseSchedule,
  Week,
  refProp,
  setShowPopUpExerciseForm,
  setFormAction,
  setSelectedExercise,
}: props) {
  return (
    <>
      <div className="flex h-[100%] w-full flex-col gap-2 overflow-auto font-poppins">
        <div ref={refProp}>
          <h3 className="text-center font-bold text-GrayishColor underline xs:text-lg">
            Week {Week}
          </h3>
        </div>
        {ExerciseSchedule?.length !== 0 &&
          ExerciseSchedule?.map((schedule: IExercisePerDay) => (
            <div key={schedule.Day}>
              <h3 className="font-bold text-DarkBlueColor underline xs:text-base">
                {schedule.Day}
              </h3>
              <div className="flex flex-col gap-1 font-poppins">
                {schedule.Exercise.map((ExerciseInfo: ExerciseType) => (
                  <div key={ExerciseInfo.name}>
                    <Exercise ExerciseInfo={ExerciseInfo} />
                    <div className="flex justify-between border-b border-l border-r border-DarkBlueColor p-1 px-1 font-poppins">
                      <button
                        className="cursor-pointer bg-PinkishColor text-white xs:w-3/12"
                        onClick={() => {
                          setShowPopUpExerciseForm(true);
                          setFormAction("Edit");
                          setSelectedExercise({
                            Day: schedule.Day,
                            Exercise: [ExerciseInfo],
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button className="cursor-pointer rounded-md border border-DarkBlueColor text-DarkBlueColor xs:w-3/12">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CustomizeExerciseCard;
