import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    let nav = props.user ? 
        <div>
            <Link to='/'>Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout}>Log Out</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>Welcome, {props.user.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/favorites'>View Favorites</Link>
        </div>
        :
        <div>
            <Link to='/'>Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/login'>Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/signup'>Signup</Link>
        </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
}

export default NavBar;