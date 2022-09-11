import React from "react";

function Meal() {
  return (
    <div className="border border-DarkBlueColor text-black">
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Meal name:</label>
        <p className="xs:text-sm">name here</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Protein:</label>
        <p className="xs:text-sm">protein here</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Carbs:</label>
        <p className="xs:text-sm">carbs here</p>
      </div>
    </div>
  );
}

export default Meal;
