import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Signup = (props) => {
    let history=useHistory()
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""})
    const {name,email,password}=credentials
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
        
      };
    const handlesubmit=async (event)=>{
      
        event.preventDefault()
       
          const response = await fetch('https://cloudnotes-backend.herokuapp.com/api/auth/createuser', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
          
          
            headers: {
              'Content-Type': 'application/json',
              
            },
           
            body: JSON.stringify({name,email,password}) // body data type must match "Content-Type" header
          });
          const json=await response.json()
          console.log(json);
         
            localStorage.setItem('token',json.authtoken)
            history.push("/")
            props.showalert('Account  Created Successfully','success')
         
          
    

    }

  
    return (
        <div className='container'>
          <h2 className='my-3'>Please Create an Account to Continue</h2>
          <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={onChange} required minLength={5} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" id="name" aria-describedby="emailHelp" name='name' onChange={onChange} required minLength={5} />
    </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} required minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword'  onChange={onChange} required minLength={5}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Signup
