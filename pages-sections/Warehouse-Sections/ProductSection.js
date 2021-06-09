import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

import { useEffect, useState } from 'react';
import fire from '../../config/fire-config';
import Link from 'next/link';

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgFluid,
        classes.imgCardTop,
        classes.imgCardBottom,
    );
    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fire.firestore()
            .collection('product')
            .onSnapshot(snap => {
                const products = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(products);
            });
    }, []);
    console.log(products);
    return (
        <div className={classes.section}>
            {/* <h2 className={classes.title}>Check out or warehouse</h2> */}


            <CardHeader color="primary" className={classes.cardHeader}>

                <h3 className={classes.cardTitle}>Online Gallery</h3>
                <ArrowDropDownCircleIcon className={classes.socialIcons}>lol</ArrowDropDownCircleIcon>
                <div className={classes.socialLine}>
                </div>
            </CardHeader>
            <div>
                <GridContainer>

                    {products.map(product =>
                        <GridItem key={product.id} xs={12} sm={12} md={4}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                                    <img src={product.productImage} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    <Link href="/product/[id]" as={'/product/' + product.id}>
                                        <a itemProp="products">{product.productName}</a>
                                    </Link>
                                    <br />

                                    <small className={classes.smallTitle}> ${product.productPrice}</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                        {product.productDescription} <a href="#pablo">links</a> for people to be able to
              follow them outside the site.
            </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >

                                        <i className={classes.socials + " far fa-heart"} />
                                        <p className={classes.description}> Add to library</p>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    )}
                </GridContainer>
            </div>
        </div>
    );
}