function Final() {
  return (
    <div className="font-poppins">
      <h1 className="font-bold text-black xs:text-sm">
        You are in the last step!
      </h1>
      <p className="text-DarkBlueColor xs:text-xs">
        Just create the name of your{" "}
        <span className="font-bold text-PinkishColor">plan</span> below and you
        are good to go!
      </p>
      <div className="mt-4 flex flex-col gap-1">
        <label className="font-bold text-DarkBlueColor xs:text-sm">
          Plan name
        </label>
        <input
          className="w-8/12 bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
          type="text"
          name="planName"
          placeholder="Beginners Plan"
        />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <button className="w-max cursor-pointer bg-DarkBlueColor p-1 text-white xs:text-sm">
          Click here to view your Exercises
        </button>
        <button className="w-max cursor-pointer bg-DarkBlueColor p-1 text-white xs:text-sm">
          Click here to view your Diet plan
        </button>
      </div>
      <button className="mt-3 w-4/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm">
        Create
      </button>
    </div>
  );
}

export default Final;
