import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
      <div className='textBox'>
        <p className='text'> Get basic information</p>
        <p className='text'> about the cars </p>
      </div>
    </div>
  );
}

export default Home;