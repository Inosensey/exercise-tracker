import AddExercise from "./AddExercise";
import ExerciseCard from "./ExerciseCard";

function Customize(props: { setExerciseCreateType: any }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="relative h-full">
        <div className="h-[65%] overflow-auto border">
          <ExerciseCard />
        </div>
        {/* this is going to be a pop up */}
        <AddExercise setExerciseCreateType={props.setExerciseCreateType} />
      </div>
    </div>
  );
}

export default Customize;
