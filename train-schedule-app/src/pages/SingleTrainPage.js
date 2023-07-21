import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleTrainPage = () => {
    const { trainNumber } = useParams();
    const [trainData, setTrainData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrainData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/trains/${trainNumber}`);
                setTrainData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching train data:', error);
                setLoading(false);
            }
        };

        fetchTrainData();
    }, [trainNumber]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="spinner border-t-4 border-blue-500 rounded-full h-16 w-16 animate-spin"></div>
            </div>
        );
    }

    const { trainName, departureTime, seatsAvailable, price, delayedBy } = trainData;

    return (
        <div className=' bg-gray-300 h-screen'>
            <div className="container mx-auto  p-4">
                <div className="p-4 border rounded-lg shadow-md bg-gray-100 cursor-pointer">
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
            </div>
        </div >
    );
};

export default SingleTrainPage;
