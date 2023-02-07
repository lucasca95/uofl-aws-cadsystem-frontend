import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "150%",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "rgb(100,120,150)",
    },
    image: {
        display: "flex",
        alignItems: "center",
        width: "10rem",
        height: "100%",
        backgroundColor: "rgb(150,120,100)",
    }
}));

export default useStyles;
