import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/about');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
