
import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import CreateIcon from '@material-ui/icons/Create';
import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";

import image from "assets/img/beach1.jpg";

import fire from '../../config/fire-config';

import { useRouter } from 'next/router';

const useStyles = makeStyles(styles);
const Register = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const [passConf, setPasswordConfirm] = useState('');


    const router = useRouter();
    // Hook to capture input fields
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [notification, setNotification] = useState('');
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    // Handle submit function

    const handleSubmit = (e) => {
        // console.log(e.target.elements.userName.value);
        // console.log(e.target.elements.userPassword.value);
        // console.log(e.target.elements.passwordConfirmation.value);
        // console.log(userName, password, passConf)
        e.preventDefault();
        if (e.target.elements.userPassword.value !== e.target.elements.passwordConfirmation.value) {
            setNotification(
                'Password and password confirmation does not   match'
            )
            setTimeout(() => {
                setNotification('')
            }, 2000)
            setUserPassword('');
            setPasswordConfirm('');
            return null;
        }
        fire.auth()
            .createUserWithEmailAndPassword(e.target.elements.userName.value, e.target.elements.userPassword.value)
            .catch((err) => {
                console.log(err.code, err.message)
            });
        router.push("/warehouse")
    }
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="MAVA"
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={4}>
                                <Card className={classes[cardAnimaton]}>
                                    <form onSubmit={handleSubmit} className={classes.form}>
                                        <CardHeader color="primary" className={classes.cardHeader}>

                                            <h3>Create Account</h3>

                                            <AccountCircleIcon className={classes.socialIcons} />
                                            <div className={classes.socialLine}>
                                            </div>
                                        </CardHeader>
                                        {/* <p className={classes.divider}>Or Be Classical</p> */}

                                        <CardBody>
                                            {/* FIRST INPUT */}
                                            <CustomInput
                                                labelText="Email"
                                                id="userName"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <PersonOutlineIcon className={classes.inputIconsColor} />

                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            {/* Second INPUT */}
                                            <CustomInput
                                                labelText="Password"
                                                id="userPassword"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <LockOutlinedIcon className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            {/* Third INPUT */}
                                            <CustomInput
                                                labelText="Confirm Password"
                                                id="passwordConfirmation"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <LockOutlinedIcon className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button type="submit" simple color="primary" size="lg">
                                                Register
                                             </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
        </div>
    );
}

export default Register;