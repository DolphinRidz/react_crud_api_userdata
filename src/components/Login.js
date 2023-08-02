import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const[login_id, setLoginId] = useState('');
    const[password, setPassword] = useState(''); 
    const session_url = 'https://64ca670c700d50e3c704da8f.mockapi.io/riyacrudapi/users';
    // let uname = 'test@sunbasedata.com';
    // let pass = 'Test@123';
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    axios.post(session_url, {}, {
            auth: {login_id: login_id, password: password}
    }).then(function(response){
        console.log('Authenticated');
    }).then(() =>{
      history("/form");
  }).catch(function(error){
        console.log('Error on Authentication');
    });
}
  return (
    <>
    <form class="container-fluid">
    <div className="mb-3">
    <label htmlFor="exampleInput1" className="form-label">User ID</label>
    <input type="text" 
    className="form-control" id="exampleInput1"
    onChange={(e) => setLoginId(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" 
    className="form-control" id="exampleInputPassword1"
    onChange={(e) => setPassword(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary"
  onClick= {handleSubmit}>Submit</button>
</form>
    </>
  )
}


export default Login