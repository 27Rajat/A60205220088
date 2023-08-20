import React from "react";
import TrainItem from "./TrainItem";

const trainData = [
  { id: 1, departureTime: "09:00 AM", destination: "Gwalior" },
  { id: 2, departureTime: "12:30 PM", destination: "Agra" },
  { id: 1, departureTime: "08:00 AM", destination: "Delhi" },
  { id: 2, departureTime: "11:30 PM", destination: "Indore" },
  { id: 1, departureTime: "10:00 AM", destination: "Jhansi" },
  { id: 2, departureTime: "01:30 PM", destination: "Mumbai" },
  { id: 1, departureTime: "07:00 AM", destination: "Jaipur" },
  { id: 2, departureTime: "05:30 PM", destination: "Kolkata" }
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
