import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UpdateCustomer = () => {
  const [userid, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const[street, setStreet] = useState('');
  const[address, setAddress] = useState('');
  const[city, setCity] = useState('');
  const[state, setState] = useState('');
  const[email, setEmail] = useState('');
  const[contact, setContact] = useState('');
  const navigate = useNavigate();
    // const session_url = 'https://64ca670c700d50e3c704da8f.mockapi.io/riyacrudapi/users';
// const header = {"Authorization": "Bearer token_recieved_in_authentication_API_call"};
useEffect(() => {
  setUserId(localStorage.getItem("userid"));
  setName(localStorage.getItem("name"));
  setLastName(localStorage.getItem("lastname"));
  setStreet(localStorage.getItem("street"));
  setAddress(localStorage.getItem("address"));
  setCity(localStorage.getItem("city"));
  setState(localStorage.getItem("state"));
  setEmail(localStorage.getItem("email"));
  setContact(localStorage.getItem("contact"));

}, []);
    const handleUpdate = (e) => {
        e.preventDefault();
    axios.put(`https://64ca670c700d50e3c704da8f.mockapi.io/riyacrudapi/users/${userid}`,
    {
      name:name, lastname: lastname, email:email,
    }).then(() =>{
            navigate("/display");
        });
};
  return (
    <>
    <form>
        <h3>Update Data</h3>
  <div className="mb-3">
    <label htmlFor="InputName1" className="form-label">First Name</label>
    <input type="text" 
    className="form-control" id="InputName1" value={name}
    onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="InputName2" className="form-label">Last Name</label>
    <input type="text" 
    className="form-control" id="InputName2" value={lastname}
    onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="InputName3" className="form-label">Street</label>
    <input type="text" 
    className="form-control" id="InputName3" value={street}
    onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="text" 
    className="form-control" value={address}
    onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">City</label>
    <input type="text" 
    className="form-control"  value={city}
    onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">State</label>
    <input type="text" 
    className="form-control" value={state}
    onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" 
     value={email}
    onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Contact Number</label>
    <input type="email" className="form-control" value={contact}
    onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary"
  onClick= {handleUpdate}>Update</button>
</form>
    </>
  )
}

export default UpdateCustomer;