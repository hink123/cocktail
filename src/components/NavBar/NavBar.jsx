import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <Link to='/'>Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/login'>Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/signup'>Signup</Link>
        </div>
    )
}

export default NavBar;