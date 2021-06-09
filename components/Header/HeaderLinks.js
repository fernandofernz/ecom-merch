/*eslint-disable*/
import React, { useState } from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

import fire from '../../config/fire-config';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const [loggedIn, setLoggedIn] = useState(false);

  fire.auth()
    .onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })

  const handleLogout = () => {
    fire.auth()
      .signOut()
      .then(() => {
        setNotification('Logged out')
        setTimeout(() => {
          setNotification('')
        }, 2000)
      });
  }
  const classes = useStyles();
  return (




    <List className={classes.list}>
      {!loggedIn
        ?
        <>
          <ListItem className={classes.listItem}>
            <Link href="/beachstop" as="/beachstop">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}>
                <StorefrontIcon className={classes.icons}></StorefrontIcon> Home
            </Button>
            </Link>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Link href="/user/register" as="/user/register">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}>
                <AccountCircleIcon className={classes.icons}></AccountCircleIcon> Register
          </Button>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="/user/login" as="/user/login">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}>
                <AccountCircleOutlinedIcon className={classes.icons}></AccountCircleOutlinedIcon> Sign in
          </Button>
            </Link>
          </ListItem>
        </>
        :
        <>
          <ListItem className={classes.listItem}>
            <Link href="/warehouse" as="/warehouse">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}>
                <StorefrontIcon className={classes.icons}></StorefrontIcon> Warehouse
            </Button>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>

            <Link href="/product-upload" as="/product-upload">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}>
                <AddCircleOutlineOutlinedIcon className={classes.icons}></AddCircleOutlineOutlinedIcon> Upload Product
              </Button>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick={handleLogout}>
              <AccountCircleIcon className={classes.icons}></AccountCircleIcon> Log Out
             </Button>
          </ListItem>
        </>

      }




      {/* 

      <ListItem className={classes.listItem}>
        <Link href="/user/register" as="/user/register">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            <AccountCircleIcon className={classes.icons}></AccountCircleIcon> Register
            </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>

        <Link href="/user/register" as="/user/register">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            <AccountCircleIcon className={classes.icons}></AccountCircleIcon> Register
          </Button>
        </Link>
      </ListItem>



      <ListItem className={classes.listItem}>

        <Link href="/product-upload" as="/product-upload">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            <AddCircleOutlineOutlinedIcon className={classes.icons}></AddCircleOutlineOutlinedIcon> Upload Product
    </Button>
        </Link>
      </ListItem>


      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}

    </List >
  );
}
