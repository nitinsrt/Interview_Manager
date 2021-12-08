import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar , Toolbar ,Typography ,Button } from '@material-ui/core'
import { Link  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      padding:10,
      backgroundColor:"black"    
    },
  }));

const Header = () =>{
    const classes = useStyles();
    return (
      <AppBar position="static" style={{backgroundColor:"black"}} >
  <Toolbar variant="dense">
    <Typography align ="left" variant="h4" color="black" className={classes.title}>
      Interview Manager
    </Typography>
    
    <div > 
     
     <Button color="inherit"> 
      <Link to="/" style={{ textDecoration: "none", color:'white', width: "100%" }} >
                   Dashboard
       </Link> 
     </Button>
     <Button color="inherit"> 
      <Link to="/interviews" style={{ textDecoration: "none", color:'white', width: "100%" }} >
                   View Interviews
       </Link>
     </Button>
     <Button color="inherit"> 
       <Link to="/update" style={{ textDecoration: "none", color:'white', width: "100%" }} >
                   Update Interviews
       </Link>
       </Button>
    </div>
  </Toolbar>
</AppBar>
    )
}

export default Header;