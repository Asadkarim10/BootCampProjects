import React from 'react';
import {  useLocation,Link  } from 'react-router-dom';





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
