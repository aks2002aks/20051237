const axios = require('axios');
require('dotenv').config();


const getAuthToken = async () => {
  try {
    const response = await axios.post(`http://20.244.56.144/train/auth`, {
      companyName: "Train Central",
      clientID: "a353dc52-7439-4030-8296-f3dc84dc420d",
      ownerName: "Ashwani",
      ownerEmail: "20051237@kiit.ac.in",
      rollNo: "20051237",
      clientSecret: "ninyrTgqubNiIzWc"
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Failed to obtain the authorization token:", error.response.data);
    return null;
  }
};

const getTrainSchedule = async (req, res) => {
  try {
    const auth_token = await getAuthToken();

    if (!auth_token) {
      res.status(500).json({ error: 'Failed to obtain the authorization token' });
      return;
    }

    const response = await axios.get(`http://20.244.56.144/train/trains`, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });

    if (!Array.isArray(response.data)) {
      throw new Error('Invalid API response format. Expected an array.');
    }

    const currentTime = new Date();

    const twelveHoursLater = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);
    const filteredTrains = response.data.filter((train) => {
      const departureTime = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        train.departureTime.Hours,
        train.departureTime.Minutes,
        train.departureTime.Seconds
      );
      return departureTime > currentTime && departureTime < twelveHoursLater;
    });

    filteredTrains.sort((a, b) => {
      if (a.price.AC === b.price.AC) {
        if (a.price.sleeper === b.price.sleeper) {
          return b.seatsAvailable.AC - a.seatsAvailable.AC || b.seatsAvailable.sleeper - a.seatsAvailable.sleeper;
        }
        return a.price.sleeper - b.price.sleeper;
      }
      return a.price.AC - b.price.AC;
    });

    res.status(200).json(filteredTrains);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getTrainSchedule,
};
