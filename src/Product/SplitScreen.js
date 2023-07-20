import React from 'react';
import { Link } from 'react-router-dom';
import './SplitScreen.css'; // Import the CSS file for styling

const SplitScreen = () => {
  return (
    <div>
    <div class="split left">
    <div class="centered">
    <Link to='/health'><h3>Health Insurance</h3></Link>
    </div>
    </div>
    
    <div class="split middle">
    <div class="centered">
    <Link to='/car'><h3>Car Insurance</h3></Link>
    </div>
    </div>
    <div class="split middle1">
    <div class="centered">
    <Link to='/bike'><h3>Bike Insurance</h3></Link>
    </div>
    </div>
    <div class="split right">
    <div class="centered">
    <Link to='/electronics'><h3>Electronics Insurance</h3></Link>
    </div>
    </div>

   

    </div>
  );
}

export default SplitScreen;