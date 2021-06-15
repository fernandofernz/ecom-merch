import { container, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const beachStopPageStyle = {
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
        paddingTop: "20vh",
        color: "#3e2141",
        paddingBottom: "200px",
    },
    ...imagesStyle,
    cardHidden: {
        opacity: "0",
        transform: "translate3d(0, -60px, 0)"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "-8rem",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: 'center',
        transform: "translate3d(5rem, 0rem, 0)"

    },
    pageHeader: {

        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF"
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%"
        }
    },
    form: {
        margin: "0"
    },
    card: {
        display: "inline-block",
        position: "relative",
        width: "100%",
        margin: "25px 0",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        borderRadius: "10px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        alignItems: "center",
        verticalAlign: 'middle',
        // background: 'rgba( 245, 251, 195, 0.20 )',
        // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        // backdropFilter: 'blur( 7.5px )',
        // // -webkit-backdrop-filter: blur( 7.5px );
        // borderRadius: '10px',
        // border: '1px solid rgba( 255, 255, 255, 0.18 )',

    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    socialIcons: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
    },
    icons: {
        width: "20px",
        height: "20px",
        marginRight: "3px"
    },
    imageCard: {
        transform: "translate3d(5rem, -2rem, 0)"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important"
    },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0"
    },
    inputIconsColor: {
        color: "#495057"
    },
    logoImage: {
        transform: "translate3d(-2rem, -3rem, 0)",
        width: '100px',
    },
    logoLefImage: {
        transform: "translate3d(-2rem, -3rem, 0)",
        width: '100px',
    }
};

export default beachStopPageStyle;
