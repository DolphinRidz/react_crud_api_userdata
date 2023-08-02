import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const DisplayCustomerData = () => {
    const [data, setData] = useState([]);

    const session_url = 'https://64ca670c700d50e3c704da8f.mockapi.io/riyacrudapi/users';

    const getData = () => {
        axios.get(session_url).then((res) =>{
        setData(res.data);});
    }

    const handleDelete = (id) =>{
        axios.delete(`https://64ca670c700d50e3c704da8f.mockapi.io/riyacrudapi/users/${id}`)
        .then(() => {getData();});
    }

    const setToLocalStorage = (loginid, name,lastname,street,address,city, state, email, contact) => {
        localStorage.setItem("loginid", loginid);
        localStorage.setItem("name", name);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("street", street);
        localStorage.setItem("address", address);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
        localStorage.setItem("email", email);
        localStorage.setItem("contact", contact);
      };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h3>Customer Data</h3>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Street</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachData) => {
                            return (
                                <tr>
                                    <th scope="row">{eachData.loginid}</th>
                                    <td>{eachData.first_name}</td>
                                    <td>{eachData.last_name}</td>
                                    <td>{eachData.street}</td>
                                    <td>{eachData.address}</td>
                                    <td>{eachData.city}</td>
                                    <td>{eachData.state}</td>
                                    <td>{eachData.email}</td>
                                    <td>{eachData.contact}</td>
                                    <td>
                                    <Link to="/update">
                                    <button className='btn-success' 
                                    onClick={() => 
                                    setToLocalStorage(eachData.loginid,eachData.first_name, eachData.last_name, 
                                        eachData.street,eachData.address, eachData.city,eachData.state,
                                     eachData.email, eachData.contact)}>Edit</button>
                                    </Link></td>
                                    <td><button className='btn-danger' onClick={() => handleDelete(eachData.loginid)}>Delete</button></td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default DisplayCustomerData