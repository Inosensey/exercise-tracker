import React from "react";

function Exercise() {
  return (
    <div className="border border-DarkBlueColor text-black">
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Exercise name:</label>
        <p className="xs:text-sm">name here</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Sets:</label>
        <p className="xs:text-sm">sets here</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Reps:</label>
        <p className="xs:text-sm">reps here</p>
      </div>
    </div>
  );
}

export default Exercise;
