import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#7E33E0',
    color: '#FFFFFF',
    height: '5vh',
    width: '100%',
    display: 'flex',
    position: 'fixed',
    zIndex: '5',
  },
  container: {
    maxWidth: '1100px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0 auto',
    alignItems: 'center'
  },
  appBarUl: {
    listStyle: 'none',
    display: 'flex',
    margin: '0',
    padding: '0'
  },
  appBarLi: {
    marginRight: '50px'
  },
  appBarTag: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <div className={classes.container}>
        <ul className={classes.appBarUl}>
          <li className={classes.appBarLi}>stanlyskwok@gmail.com</li>
          <li className={classes.appBarLi}>(+62) 813 5720 2812</li>
        </ul>
        <ul className={classes.appBarUl}>
          <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>English</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>USD</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Login</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Wishlist</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;