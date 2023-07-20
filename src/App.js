
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Nav';
import AboutUs from './About/About';
import SplitScreen from './Product/SplitScreen';
import Health from './health/Health';
import CustomerService from './customer/CustomerService';
import GroupSchemes from './schemes/GroupSchemes';

// import product from './Product/product';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/home' element={<Home/>}/>
   <Route exact path='/about' element={<AboutUs/>}/>
   <Route exact path='product' element={<SplitScreen/>}/>
   <Route exact path='/health' element={<Health/>}/>
   <Route exact path='/customer' element={<CustomerService/>}/>
   <Route exact path='/group' element={<GroupSchemes/>}/>
   <Route exact path='/car' element={<car/>}/>
    </Routes>
    </>
  );
}

export default App;
