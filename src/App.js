import React from 'react';
import AddData from "./component/AddData/Add";
import Nav from "./component/Navbar/Nav";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home/Home';
import Live from "./component/Home/Live";
import Recent from './component/Home/Recent';
import Upcomming from './component/Home/Upcomming';
import Home2 from './component/Home/Home2';
import "./component/css/style.css";
import Failed from './component/Home/Failed';
import Footer from './component/Footer/Footer';
const App = () => {
 
  return (
    <BrowserRouter>
  <Nav/>
  <Home/>
<Routes>
             <Route path="/" element={<Home2/>}/>
             <Route path="/recent" element={<Recent/>} />
             <Route path="/live" element={<Live/>} />
             <Route path="/failed" element={<Failed/>} />
             <Route path="/upcomming" element={<Upcomming/>} />
    <Route path="/addtask" element={<AddData/>} />

</Routes>
<Footer/>
    </BrowserRouter>

  );
};

export default App;