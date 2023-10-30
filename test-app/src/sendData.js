import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ name: 'John Doe', age: 30 });

  const sendDataToBackend = () => {
    axios
      .post('http://example.com/api/endpoint', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <button onClick={sendDataToBackend}>Send Data to Backend</button>
    </div>
  );
}

export default App;