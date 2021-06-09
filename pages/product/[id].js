// [id].js Pages that begin with [ and end with ] are dynamic pages in Next.js
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import CardHeader from "components/Card/CardHeader.js";



import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

import fire from '../../config/fire-config';
import Link from 'next/link'

const useStyles = makeStyles(styles);

export default function Product(props) {

    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgFluid,
    );
    const productImageClasses = classNames(classes.productImage)
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>
            <Header
                color="transparent"
                brand="MAVA"
                rightLinks={<HeaderLinks />}
                absolute
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/mava-landing.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>

                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <img src={props.productImage} alt="..." className={productImageClasses} />

                                        <div className={classes.socialLine}>
                                        </div>
                                    </CardHeader>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{props.productName}</h3>
                                        <h6>Price: {props.productPrice}</h6>

                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                {props.productDescription}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Gallery",
                                            tabIcon: Camera,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={props.productImage}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={studio2}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={studio5}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={studio4}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const getServerSideProps = async ({ query }) => {
    const content = {}
    await fire.firestore()
        .collection('product')
        .doc(query.id)
        .get()
        .then(result => {
            content['productName'] = result.data().productName;
            content['productDescription'] = result.data().productDescription;
            content['productImage'] = result.data().productImage;
            content['productPrice'] = result.data().productPrice;
        });
    return {
        props: {
            productName: content.productName,
            productDescription: content.productDescription,
            productImage: content.productImage,
            productPrice: content.productPrice,
        }
    }
}
