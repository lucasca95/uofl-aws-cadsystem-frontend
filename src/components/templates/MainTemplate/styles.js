import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "rgb(0,0,0)",
    },
    form: {
        display: "flex",
        // backgroundColor: "rgb(30,50,80)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& input": {
            // paddingLeft: "15%",
            // marginTop: "5%",
            // marginBottom: "5%",
        }
    },
    formEmailLayer:{
        // backgroundColor: '#FFF'
    },
    formEmailInput:{
        backgroundColor: '#FFF'
    },
    imagesList: {
        display:"flex",
        flexDirection: "column",
        alignItems: "center",

    },
}));

export default useStyles;
