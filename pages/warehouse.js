import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import WarehouseSection from 'pages-sections/Warehouse-Sections/ProductSection.js';




const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function WarehousePage(props) {

    const classes = useStyles();
    const { ...rest } = props;


    return (
        <div>
            <Header
                color="white"
                routes={dashboardRoutes}
                brand="Mava"
                rightLinks={<HeaderLinks />}
                absolute
                changeColorOnScroll={{
                    height: 50,
                    color: "transparent"
                }}
                {...rest}
            />
            <Parallax filter responsive image={require("assets/img/beach1.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Check out our warehouse</h1>
                            <h4>
                                We have a vast selection and variety of products at discount prices. Explore our online warehouse or visit our storefront.
              </h4>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <WarehouseSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}
