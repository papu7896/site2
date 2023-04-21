
import './App.css';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import Signin from './screens/Signin';
import Home from './screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Router>
    
    <div >
      <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        

        <Route exact path='/login' element={<Login/>}/>
        <Route  exact path='/Signin' element={<Signin/>}/>
      </Routes>
    </div>
    </Router>
     </>
  );
}

export default App;
