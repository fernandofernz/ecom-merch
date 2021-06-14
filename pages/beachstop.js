import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import CreateIcon from '@material-ui/icons/Create';
import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import InputAdornment from "@material-ui/core/InputAdornment";

import profile from "assets/img/faces/christian.jpg";
import beach1 from 'assets/img/beach3.jpg';
import beach2 from 'assets/img/beach2.jpg';
import beach3 from 'assets/img/beach3.jpg';

import merch2 from 'assets/img/merch2.jpg';
import merch3 from 'assets/img/merch3.jpg';

// import image from "../assets/img/beach1.jpg";
import Link from 'next/link';

import styles from "assets/jss/nextjs-material-kit/pages/beachStop.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const classes = useStyles();

    const { ...rest } = props;

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgFluid,
        classes.imageCard
    );

    const cardClasses = classNames(classes[cardAnimaton], classes.card);
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const handleChange = (e) => {
        console.log('clicked');
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('clicked');
    }

    return (
        <div>
            <Header
                color="transparent"
                brand="Hes & Hers"
                rightLinks={<HeaderLinks />}
                absolute
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + beach1 + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >


                <div className={classes.container}>
                    <GridContainer justify="center" direction='row' >
                        <GridItem xs={12} sm={6} md={5} >
                            <Card className={cardClasses}>

                                <Link href="/his-product-upload" as={'/his-product-upload'}>
                                    <GridItem xs={12} sm={12} md={7} className={classes.itemGrid}>

                                        <img src={merch3} alt="..." className={imageClasses} />
                                        <h2 className={classes.title}>His</h2>
                                    </GridItem>
                                </Link>


                            </Card>
                        </GridItem>

                        <GridItem xs={12} sm={6} md={5} >
                            <Card className={cardClasses}>

                                <Link href="/her-product-upload" as={'/her-product-upload'}>
                                    <GridItem xs={12} sm={12} md={7} className={classes.itemGrid}>
                                        <img src={merch2} alt="..." className={imageClasses} />
                                        <h2 className={classes.title}>Hers</h2>
                                    </GridItem>
                                </Link>


                            </Card>
                        </GridItem>


                    </GridContainer>
                </div>


            </div>



            <Footer />
        </div>
    );
}
