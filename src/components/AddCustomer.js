import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Form.css';
const AddCustomer = () => {
    const[first_name, setName] = useState('');
    const[last_name, setLastName] = useState(''); 
    const[street, setStreet] = useState('');
    const[address, setAddress] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const session_url = 'https://64ca670c700d50e3c704da8f.mockapi.io/riyacrudapi/users';
const history = useNavigate();
const header = {"Authorization": "Bearer token_recieved_in_authentication_API_call"};

    const handleSubmit = (e) => {
        e.preventDefault();
    axios.post(session_url,
            {first_name: first_name,last_name: last_name,street: street,
               address: address,city:city, state:state, email: email, phone:phone, header,}
        ).then(() =>{
            history("/display");
        });
        
};
  return (
    <>
    <form class="container">
      
      <div className="d-flex justify-content-between m-2">
      <h3>Fill this Form</h3>
        <Link to="/display">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
  <div className="flex_column">
    <input type="text" 
    className="form-control" placeholder="First Name"
    onChange={(e) => setName(e.target.value)} />
    <input type="text" 
    className="form-control" placeholder="Last Name"
    onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="flex_column">
    <input type="text" 
    className="form-control" placeholder="Street "
    onChange={(e) => setStreet(e.target.value)} />
    <input type="text" 
    className="form-control" placeholder="Address"
    onChange={(e) => setAddress(e.target.value)} />
  </div>
  <div className="flex_column">
    <input type="text" 
    className="form-control" placeholder="City "
    onChange={(e) => setCity(e.target.value)} />
    <input type="text" 
    className="form-control" placeholder="State"
    onChange={(e) => setState(e.target.value)} />
  </div>
  <div className="flex_column">
    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="text" 
    className="form-control" placeholder="Phone Number"
    onChange={(e) => setPhone(e.target.value)} />
  </div>
  <div className="flex_column form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">I am confident this data is correct</label>
  </div>
  <button type="submit" className="btn btn-primary"
  onClick= {handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default AddCustomer