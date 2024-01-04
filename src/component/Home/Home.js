import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
return(
    <>
    <div className='home_container'>
        <div className='home'>
        <div className='recent'>
            <Link className="home_link"to="/recent">Recent</Link>
        </div>
        <div className='live'>
            <Link className="home_link" to="/live">Live</Link>
        </div>
        <div className='upcomming'>
            <Link className="home_link" to="/upcomming">Upcomming</Link>
        </div>
        </div>
        <div className='home_data'>
        </div>
    </div>
    </>
)
}
export default Home;