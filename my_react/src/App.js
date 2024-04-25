import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = async () => {
    const inputData = {
      num_industries: 10,
      num_power_houses: 5,
      num_vehicles: 1000,
      num_commercial_buildings: 50,
      num_trees: 200
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict_air_pollution', inputData);
      setPrediction(response.data.predicted_air_pollution);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePrediction}>Get Prediction</button>
      {prediction && <p>Predicted Air Pollution Index: {prediction}</p>}
    </div>
  );
}

export default App;
