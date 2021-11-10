import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: '50px 180px',
    backgroundColor: "#EEEFFB",
    display: 'grid',
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gridGap: '50px',
  },
  searchBar: {
    height: '40px',
    display: 'flex',
  },
  textInput: {
    border: '1px solid #E7E6EF',
    padding: '5px 60px 5px 10px',
    margin: '0',
  },
  icon: {
    backgroundColor: '#FB2E86',
    border: 'none',
    padding: '0 30px',
  },
  footerCompany: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  footerContact: {
    color: '#8A8FB9',
    margin: '20px 0 10px',
  },
  footerContactInfo: {
    color: '#8A8FB9',
    margin: '0',
  },
  footerLink: {
    color: "#8A8FB9",
    display: "block",
    textDecoration: 'none',
    marginBottom: '15px',
  },
  footerTitle: {
    fontSize: "24px",
    marginBottom: '30px',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.company}>
        <p className={classes.footerCompany}>Hekto</p>
        <div className={classes.searchBar}>
          <input placeholder="Enter Email Address" className={classes.textInput} type="text" id="fname" name="fname" />
          <Button color="primary" className={classes.icon}>            
            <span>Sign Up</span>
          </Button>
        </div>
        <p className={classes.footerContact}>Contact Info</p>
        <p className={classes.footerContactInfo}>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>
      <div className={classes.footerCategory}>
        <p className={classes.footerTitle}>Categories</p>
        <a href="#" className={classes.footerLink}>Laptops & Computers</a>
        <a href="#" className={classes.footerLink}>Cameras & Photography</a>
        <a href="#" className={classes.footerLink}>Smart Phones & Tablets</a>
        <a href="#" className={classes.footerLink}>Video Games & Consoles</a>
        <a href="#" className={classes.footerLink}>Waterproof Headphones</a>
      </div>
      <div className={classes.footerCategory}>
        <p className={classes.footerTitle}>Customer Care</p>
        <a href="#" className={classes.footerLink}>My Account</a>
        <a href="#" className={classes.footerLink}>Discount</a>
        <a href="#" className={classes.footerLink}>Returns</a>
        <a href="#" className={classes.footerLink}>Order History</a>
        <a href="#" className={classes.footerLink}>Order Tracking</a>
      </div>
      <div className={classes.footerCategory}>
        <p className={classes.footerTitle}>Pages</p>
        <a href="#" className={classes.footerLink}>Blog</a>
        <a href="#" className={classes.footerLink}>Browse the Shop</a>
        <a href="#" className={classes.footerLink}>Category</a>
        <a href="#" className={classes.footerLink}>Pre-Built Pages</a>
        <a href="#" className={classes.footerLink}>Visual Composer Elements</a>
        <a href="#" className={classes.footerLink}>WooCommerce Pages</a>
      </div>
    </div>
  );
}

export default Footer;