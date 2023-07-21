import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  const { trainNumber, trainName, departureTime, seatsAvailable, price, delayedBy } = train;

  return (
    <Link to={`/trains/${trainNumber}`}>
      <div className="p-4 border rounded-lg shadow-md bg-gray-100 cursor-pointer transition-all duration-200 transform hover:scale-105">
        <h3 className="text-2xl font-bold mb-4">{trainName} - {trainNumber}</h3>
        <div className="flex items-center mb-4">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <p className="text-gray-600">Departure Time: {departureTime.Hours}:{departureTime.Minutes}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center bg-green-200 p-2 rounded-lg">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div>
              <p className="text-green-600 font-bold">Sleeper</p>
              <p className="text-green-600 font-bold">Seats Available: {seatsAvailable.sleeper}</p>
            </div>
          </div>
          <div className="flex items-center bg-blue-200 p-2 rounded-lg">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div>
              <p className="text-blue-600 font-bold">AC</p>
              <p className="text-blue-600 font-bold">Seats Available: {seatsAvailable.AC}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-200 p-2 rounded-lg">
            <p className="text-green-600 font-bold">Price (Sleeper): {price.sleeper}</p>
          </div>
          <div className="bg-blue-200 p-2 rounded-lg">
            <p className="text-blue-600 font-bold">Price (AC): {price.AC}</p>
          </div>
        </div>
        <div className="bg-red-200 p-2 rounded-lg">
          <p className="text-red-600 font-bold">Delayed By: {delayedBy} minutes</p>
        </div>
      </div>
    </Link>
  );
};

export default TrainCard;
