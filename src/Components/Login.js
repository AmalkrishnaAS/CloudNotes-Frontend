import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
 const {showalert}=props
  let history=useHistory()
  const [credentials, setcredentials] = useState({email:"",password:""})
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
    
  };
    const handlesubmit=async (event)=>{
      
        event.preventDefault()
       
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
          
          
            headers: {
              'Content-Type': 'application/json',
              
            },
           
            body: JSON.stringify({email:credentials.email,password:credentials.password}) // body data type must match "Content-Type" header
          });
          const json=await response.json()
          console.log(json);
          if(json.success)
          {
            localStorage.setItem('token',json.authtoken)
            history.push("/")
            showalert('Logged in Successfully','success')
          
          }
          else
          {
            showalert('Invalid Credentials','danger')
          }
        
    

    }
    return (
      <div className="container">
          <h2 className='my-3'>Please Login to Continue</h2>
           <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp"onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Login
