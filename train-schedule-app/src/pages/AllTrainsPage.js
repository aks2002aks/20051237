import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';
import axios from 'axios';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getalltrains');
        setTrains(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trains:', error);
        setLoading(false);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div className=' bg-gray-300'>
      <div className="container mx-auto  p-4">
        <h2 className="text-2xl font-bold mb-4">All Trains Schedule</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="spinner border-t-4 border-blue-500 rounded-full h-16 w-16 animate-spin"></div>
          </div>
        ) : (
          <TrainList trains={trains} />
        )}
      </div>
    </div>
  );
};

export default AllTrainsPage;
