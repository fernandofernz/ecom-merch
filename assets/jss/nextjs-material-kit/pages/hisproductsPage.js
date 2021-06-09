import { container, title, cardTitle } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const landingPageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0"
    },
    icons: {
        width: "20px",
        height: "20px",
        marginRight: "3px"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    ...imagesStyle,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle,
    smallTitle: {
        color: "#6c757d"
    },
    description: {
        color: "#999"
    },
    justifyCenter: {
        justifyContent: "center !important"
    },
    icons: {
        top: "0",
        marginTop: "-50px",
        width: "50px",
        height: "50px",
        marginRight: "3px",
        color: "#999"
    },
    socials: {
        marginTop: "-5px",
        marginLeft: "85px",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-100px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    margin5: {
        margin: "5px"
    }
};

export default landingPageStyle;