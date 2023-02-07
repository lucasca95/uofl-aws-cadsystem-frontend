import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(210,0,0, 0.5)",
        // maxWidth: "50%",
    },
    imgList: {
        display:"flex",
        flexDirection: "column",
        // justifyItems: "center",
        alignItems: "center",
        // paddingRight: "10%",
        // backgroundColor: "rgb(111,111,0)",
    },

}));

export default useStyles;
