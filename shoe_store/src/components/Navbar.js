import React from 'react';
import {  useLocation,Link  } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';




function NavBar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
	<div>
        <Link to="/"> Home </Link>
       
        <Link to="/about"
        className={pathname.includes('about') ? 'active' : ''}
        > About </Link>
        <Link to="/product"> Product </Link>
	</div>
  );
}

export default NavBar;