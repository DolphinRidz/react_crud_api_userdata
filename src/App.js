import './App.css';
import AddCustomer from './components/AddCustomer';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayCustomerData from './components/DisplayCustomerData';
import UpdateCustomer from './components/UpdateCustomer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='form' element={<AddCustomer />}></Route>
      <Route path='display' element={<DisplayCustomerData />}></Route>
      <Route path='update' element={<UpdateCustomer />}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
