// import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';
import Register from './components/Register';
import Login from './components/Login';
import Features from './components/Features';
import Community from "./components/Community";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing"

import { Routes, Route  } from 'react-router-dom';


function App() {
  return (
      <div className="App ">
        <div className=""> 
        <Navbar/>
        </div>
      <div className=''>
          <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/home" element={<Hero/>} />
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/features" element={<Features/>}/>
          <Route path = "/blog" element={<Blog/>}/>
          <Route path = "/community" element={<Community/>}/>
          <Route path = "/pricing" element={<Pricing/>}/>

        </Routes> 
        </div>
      </div>
  );
}

export default App;
