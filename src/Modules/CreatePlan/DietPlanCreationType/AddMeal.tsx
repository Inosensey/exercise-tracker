function AddMeal(props: { setDietPlanCreateType: any }) {
  return (
    <div className="absolute bottom-0 h-[33%] border border-DarkBlueColor p-1">
      <div className="flex flex-col">
        <label className="font-poppins font-bold text-black xs:text-sm">
          Meal name
        </label>
        <input
          className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
          type="text"
          name="exerciseName"
          placeholder="Meal name"
        />
      </div>
      <div className="flex">
        <div className="flex w-2/6 gap-2 border">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Protein:
          </label>
          <input
            className="w-8/12 bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="number"
            name="protein"
            placeholder="Protein"
          />
        </div>
        <div className="flex w-2/6 gap-2 border">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Carbs:
          </label>
          <input
            className="w-8/12 bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="number"
            name="carbs"
            placeholder="Carbs"
          />
        </div>
      </div>
      <div className="flex justify-between font-poppins">
        <button
          onClick={() => props.setDietPlanCreateType("")}
          className="w-3/12  cursor-pointer rounded rounded-lg border border-DarkBlueColor p-1 font-bold text-DarkBlueColor xs:text-sm"
        >
          Cancel
        </button>
        <button className="w-3/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white xs:text-sm">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddMeal;
