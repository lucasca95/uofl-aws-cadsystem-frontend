import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    chartContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 350,
        width: "100%",
        margin: "0 auto"
    },
    top: {
        display:'flex',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    centered:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: '3%',
    }
}));

export default useStyles;
