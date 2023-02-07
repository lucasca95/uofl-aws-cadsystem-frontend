import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        marginTop: '5%',
        // backgroundColor: '#444',
    },
    paper:{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
    },
    loading:{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    }
}));

export default useStyles;
