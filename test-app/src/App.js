// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/about');
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
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Teacher</th>
            <th>Room</th>
            <th>Time</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {classList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.teacher}</td>
              <td>{item.room}</td>
              <td>{item.time}</td>
              <td>{item.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
