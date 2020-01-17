import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    )
}

export default NavBar;