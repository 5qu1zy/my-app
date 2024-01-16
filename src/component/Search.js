import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [carInfo, setCarInfo] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'V2yvzfE3mLW/1QYerIpsXQ==qt5Jvtoaz4oYeKUj';
  let apiUrl;

  const handleButtonClick = () => {
    apiUrl = 'https://api.api-ninjas.com/v1/cars?model=' + inputValue;
    console.log(inputValue);

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        setCarInfo(result);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
      });
  };

  return (
    <div className='Search'>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>

      <div className='inputDiv'>
        <input
          className='inputBox'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter car model..."
        />
        <button className='searchButton' onClick={handleButtonClick}>Search info</button>
      </div>
      {carInfo && (
        <div className='resultDiv'>
          <pre className='jsonText'>{JSON.stringify(carInfo, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className='errorDiv'>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Search;