import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: 'center',
        // backgroundColor: "rgb(210,0,0, 0.5)",
        // // maxWidth: "50%",
    },
    form:{
        display: "flex",
        justifyContent: 'center',
    },
    input:{
        backgroundColor: '#FFF',
        "& input":{
            paddingLeft: '10%',
            paddingRight: '10%',
        },
    }
}));

export default useStyles;
