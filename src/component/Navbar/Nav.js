import { useState,useEffect,React } from 'react';
import {  Link } from "react-router-dom";

function Nav(){
const [currentDate, setCurrentDate] = useState(new Date());

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentDate(new Date());
  }, 1000 * 60); // Update every minute

  return () => clearInterval(intervalId);
}, []);

const options = { 
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
timeZoneName: 'short'
};
const formattedDate = currentDate.toLocaleDateString(undefined, options);

return(
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Time-Table</Link>
    <div>{formattedDate}</div>
    <button className="btn btn-success"><Link className="home_link" to="/addtask"> Add-Task</Link></button>
    <button className="btn btn-danger"><Link className="home_link" to="/failed"> Failed-Task</Link></button>
  </div>
</nav>
    </>
)
}
export default Nav;