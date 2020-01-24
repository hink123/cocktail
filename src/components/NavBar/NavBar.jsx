import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ? 
        <div className="App-header">
            <div className="App-nav-start">
                <Link to='/' className="NavBar-important" onClick={props.handleNewSearch}>Cocktail</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/favorites' className="NavBar-normal">View Favorites</Link>
            </div>
            <div className="App-nav-end">
                <Link to='' className="NavBar-normal" onClick={props.handleLogout}>Log Out</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="NavBar-important">{props.user.name}</span>
            </div>
        </div>
        :
        <div className="App-header">
            <Link to='/' className="NavBar-important">Cocktail</Link>
            <Link to='/signup' className="NavBar-normal" >Signup</Link>
        </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
}

export default NavBar;