import React from 'react'
import"./Health.css"
// import { Button } from '@mui/material'

const Health = () => {
  return (
    <div className='pickle'>
    <h1>All health plans cover Covid-19 treatment</h1>
    <br></br>
    <h2>Who would you like to insure?</h2>
    <div className='bord'>
<div className='box22'>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Self</label>
    </div>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Spouse</label>
    </div>
    </div>
<div className='box22'>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Son</label>
    </div>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Daughter</label>
    </div>
    </div>
<div className='box22'>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Father</label>
    </div>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Mother</label>
    </div>
    </div>
    <div className='box22'>
    <div className='box'>
    <input className='check' type='checkbox'/><label id='check'>Others</label>
    </div>
    </div>
    <button className='continue'>continue</button>
    
    </div>
    </div>

   
  )
}

export default Health