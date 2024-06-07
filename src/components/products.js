"use client";
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="products">
      <h2>Movies List</h2>
      <div className="all-products">
        {data.map(movie => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
