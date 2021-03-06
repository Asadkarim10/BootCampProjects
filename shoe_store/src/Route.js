import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
  }));



function RouteConfig() {
  const classes = useStyles();


  return (
		<div style={{  height:1000 ,   backgroundImage: "url(" + "https://cdn-5f9fcb86c1ac19088c944ba8.closte.com/wp-content/uploads/2013/07/Out-of-the-Box-The-Rise-of-Sneaker-Culture_Karim-Rashid-7.jpg" + ")",
	 }}>
        <Router>
          <div style={{backgroundColor: "lightblue"}}>
          <AppBar position="static">
     <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Karims Shoe Store
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>

          </div>
          
          
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;
