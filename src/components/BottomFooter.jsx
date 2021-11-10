import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  bottomFooter: {
    height: '8vh',
    backgroundColor: "#E7E4F8",
    padding: "0 230px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    color: "#9DA0AE",
  },
  socialMediaIcons: {
    display: 'flex',
  },
  iconContainer: {
    backgroundColor: "#151875",
    borderRadius: "50%",
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '25px',
    height: '25px',
  },
  iconLink: {
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  },
  iconLinkMiddle: {
    margin: '0 15px',
  }
}));

const BottomFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.bottomFooter}>
      <span className={classes.copyright}>&copy; Hekto - All Rights Reserved</span>
      <div className={classes.socialMediaIcons}>
        <a href="#"><img className={classes.icon} src="images/facebook-ic.png"/></a>
        <a className={classes.iconLinkMiddle} href="#"><img className={classes.icon} src="images/instagram-ic.png"/></a>
        <a href="#"><img className={classes.icon} src="images/twitter-ic.png"/></a>
      </div>
    </div>
  )
}

export default BottomFooter;