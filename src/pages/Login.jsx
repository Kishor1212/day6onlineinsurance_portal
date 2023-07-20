  import React from 'react'
  import { useState } from 'react'
  import { Link } from 'react-router-dom'

  function Login() {
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    async function submit(e){
        e.preventDefault();
    }
    function validate()
    {
      if(pass.length<8)
      {
        alert("Invalid,Enter valid Password")
      }
      if(email.length<10)
      {
        alert("Invalid,Enter valid Email")
      }
    }
    return (
  <>
  <div className="login">
  <h1>Online Insurance</h1>
  <form>
        <label>Email id:</label>
        <br></br>
        <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email" Firstname="fname"/>
        <br></br>
        <br></br>
    
        <label>Password :</label>
        <br></br>
        <input type='pass' onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter password" formNoValidate/>
        <br></br>
        <br></br>
        <button type='submit' onClick={() => {
          validate()
      }}>
      <Link to={'/home'}>Submit</Link></button>
        </form>
        <br></br>
        <Link to={'/register'}>Click here to register here</Link>
        </div>
        </>
        )
      }
      
      export default Login