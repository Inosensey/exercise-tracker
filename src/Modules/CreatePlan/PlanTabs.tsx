function PlanTabs(props: { activeTab: string; setActiveTab: any }) {
  return (
    <div className="flex h-[8%] items-center text-center font-poppins font-bold text-black xs:text-xs">
      <p
        onClick={() => props.setActiveTab("Calculate BMI")}
        className={`flex h-full w-1/4 items-center justify-center ${
          props.activeTab === "Calculate BMI" && "bg-DarkBlueColor text-white"
        }`}
      >
        Calculate BMI
      </p>
      <p
        onClick={() => props.setActiveTab("Exercises")}
        className={`flex h-full w-1/4 items-center justify-center ${
          props.activeTab === "Exercises" && "bg-DarkBlueColor text-white"
        }`}
      >
        Exercises
      </p>
      <p
        onClick={() => props.setActiveTab("Diet plan")}
        className={`flex h-full w-1/4 items-center justify-center ${
          props.activeTab === "Diet plan" && "bg-DarkBlueColor text-white"
        }`}
      >
        Diet plan
      </p>
      <p
        onClick={() => props.setActiveTab("Finish")}
        className={`flex h-full w-1/4 items-center justify-center ${
          props.activeTab === "Finish" && "bg-DarkBlueColor text-white"
        }`}
      >
        Finish
      </p>
    </div>
  );
}

export default PlanTabs;
