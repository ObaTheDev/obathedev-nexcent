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
          <Route path="/" Component={Register} />
          <Route path="/home" Component={Hero} />
          <Route path = "/Login" Component={Login}/>
          <Route path = "/features" Component={Features}/>
          <Route path = "/blog" Component={Blog}/>
          <Route path = "/community" Component={Community}/>
          <Route path = "/pricing" Component={Pricing}/>

        </Routes> 
        </div>
      </div>
  );
}

export default App;
