import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FFFFFF',
    height: '7vh',
    width: '100%',
    display: 'flex',
    position: 'fixed',
    marginTop: '5vh',
    color: '#0D0E43',
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
  appBarTag: {
    textDecoration: 'none',
    color: '#0D0E43',
  },
  appBarLi: {
    marginRight: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '28px',
    marginRight: '80px',
  },
  searchBar: {
    height: '40px',
    display: 'flex',
  },
  textInput: {
    border: '1px solid #E7E6EF',
    padding: '5px 10px',
    margin: '0',
  },
  icon: {
    backgroundColor: '#FB2E86',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    marginRight: '80px',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <div className={classes.container}>
        <ul className={classes.appBarUl}>
          <li className={[classes.appBarLi, classes.logo].join(' ')}>Hekto</li>
          <ul className={classes.appBarUl}> 
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Home</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Pages</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Products</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Blog</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Shop</a></li>
            <li className={classes.appBarLi}><a href="#" className={classes.appBarTag}>Contact</a></li>
          </ul>
        </ul>
        <div className={classes.searchBar}>
          <input className={classes.textInput} type="text" id="fname" name="fname" />
          <Button color="primary" className={classes.icon}>            
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;