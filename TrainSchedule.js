import React from "react";
import TrainItem from "./TrainItem";

const trainData = [
  { id: 1, departureTime: "09:00 AM", destination: "Gwalior" },
  { id: 2, departureTime: "12:30 PM", destination: "Agra" }
  // Add more train data
];

function TrainSchedule() {
  return (
    <div>
      <h1>Train Schedule</h1>
      <ul>
        {trainData.map((train) => (
          <TrainItem key={train.id} train={train} />
        ))}
      </ul>
    </div>
  );
}

export default TrainSchedule;
