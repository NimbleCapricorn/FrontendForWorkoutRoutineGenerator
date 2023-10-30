// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/generate-program');
        console.log(response.data)
        console.log("blabla")
        setClassList(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Class List</h1>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Day</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Intensity</th>
            <th>INOL</th>
          </tr>
        </thead>
        <tbody>
          {classList.map((item) => (
            <tr key={item.ID}>
              <td>{item.Week}</td>
              <td>{item.Day}</td>
              <td>{item.Name}</td>
              <td>{item.NumberOfSets}</td>
              <td>{item.NumberOfReps}</td>
              <td>{item.Intensity}</td>
              <td>{item.INOL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
