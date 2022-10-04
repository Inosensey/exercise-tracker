import { ExerciseType } from "Typescript/Types";

type props = {
  ExerciseInfo: ExerciseType;
};

function Exercise({ ExerciseInfo }: props) {
  return (
    <div className="border border-DarkBlueColor text-black">
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Exercise name:</label>
        <p className="xs:text-sm">{ExerciseInfo.name}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Body part:</label>
        <p className="xs:text-sm">{ExerciseInfo.bodyPart}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Equipment:</label>
        <p className="xs:text-sm">{ExerciseInfo.equipment}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Target:</label>
        <p className="xs:text-sm">{ExerciseInfo.target}</p>
      </div>
      <div className="whitespace-normal border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Exercise Gif:</label>
        <p
          className="underline underline-offset-1 xs:text-sm"
          onClick={() => {
            window.open(ExerciseInfo.gifUrl);
          }}
        >
          {ExerciseInfo.gifUrl}
        </p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Sets:</label>
        <p className="xs:text-sm">3 sets</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Reps:</label>
        <p className="xs:text-sm">8-12 reps</p>
      </div>
    </div>
  );
}

export default Exercise;
