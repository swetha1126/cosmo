
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Foundation from './pages/Foundation'
import Lipstick from './pages/Lipstick'
import Register from './pages/Register'
import Login from './pages/Login'
import Forgetpassword from './pages/Forgetpassword'
import Logout from './pages/Logout';
import Cart from './pages/Cart'
      
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Header/>
     <div className="main-content">
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/reset-password' element={<Forgetpassword/>} />
      <Route path='/home' element={<Home/>} />
      <Route path="/logout" element={<Logout/>} />
      
      <Route path='/register' element={<Register/>} />
      <Route path='/foundation' element={<Foundation/>}/>
      <Route path='/lipstick' element={<Lipstick/>}/>
     <Route path='/Cart' element={<Cart/>}/>
      
     </Routes>
     </div>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
