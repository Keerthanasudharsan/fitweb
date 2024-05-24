
import './App.css';
import NavBar from "./component/NavBar"
import {Route,Routes} from 'react-router-dom'
import Home from "./component/Home"
import About from './component/About'
import Services from './component/Services';
import Signup  from './component/Signup';
import Login from './component/Login'
import Booking from './component/Booking'
import Authprovider from './component/Auth';
import RequireAuth from './component/RequireAuth';
import Cart from './component/Cart'

function App() {
  return (
    <div className="App">
      <Authprovider>
      <NavBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/service' element={<Services/>}/>
       <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/booking" element={<Booking/>}/>

      </Routes>
      </Authprovider>
     
    </div>
  );
}

export default App;
