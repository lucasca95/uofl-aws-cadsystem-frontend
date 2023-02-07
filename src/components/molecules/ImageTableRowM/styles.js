import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    resultDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '40%',
    },
    downloadButton: {
        width: '40%',

    },
}));

export default useStyles;
