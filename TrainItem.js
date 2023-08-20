import React from "react";

function TrainItem({ train }) {
  return (
    <li>
      <strong>{train.departureTime}</strong> - {train.destination}
    </li>
  );
}

export default TrainItem;
