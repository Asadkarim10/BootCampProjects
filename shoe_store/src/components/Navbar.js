import React from 'react';
import {  useLocation,Link  } from 'react-router-dom';





function NavBar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
	<div>
        <Link to="/" style={{color: "white"}} > Home </Link>
        <Link to="/about" style={{color: "white"}}  className={pathname.includes('about') ? 'active' : ''}
        > About </Link>
        <Link to="/product" style={{color: "white"}}> Product </Link>
	</div>
  );
}

export default NavBar;
