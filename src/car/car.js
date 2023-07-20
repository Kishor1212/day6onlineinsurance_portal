import React from 'react'
import"./car.css";

const car = () => {
  return (
    <div className='head'>
    <h1>All health plans cover Covid-19 treatment</h1>
    <br></br>
    <h2>Who would you like to insure?</h2>
    <div className='borde'>
<div className='outerbox'>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Self</label>
    </div>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Spouse</label>
    </div>
    </div>
<div className='box223'>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Son</label>
    </div>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Daughter</label>
    </div>
    </div>
<div className='box223'>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Father</label>
    </div>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Mother</label>
    </div>
    </div>
    <div className='box223'>
    <div className='box1'>
    <input className='check1' type='checkbox'/><label id='check'>Others</label>
    </div>
    </div>
    <button className='continue1'>continue</button>
    
    </div>
    </div>
   
  )
}

export default car