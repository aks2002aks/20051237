import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
