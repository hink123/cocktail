import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    let nav = props.user ? 
        <div className="App-header">
            <div className="App-nav-start">
                <Link to='/' onClick={props.handleNewSearch}>Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/favorites'>View Favorites</Link>
            </div>
            <div>Cocktail</div>
            <div className="App-nav-end">
                <Link to='' onClick={props.handleLogout}>Log Out</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{props.user.name}</span>
            </div>
        </div>
        :
        <div className="App-header">
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