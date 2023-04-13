import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',

        height: '97vh',
        // backgroundColor: '#444',
    },
    toolBarRoot: {
        display: "flex",
        // flexDirection: "row",
        // backgroundColor: '#444',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        height: '70px',
        padding: '0 32px',
    },
    logo:{
        display: "flex",
        alignItems: 'center',
        // backgroundColor: '#444',
        width: '50%',
        padding: '0 auto',
        justifyContent: "start",
    },
    children: {
        display: 'flex',
        flexDirection: 'column',
        height: '93vh',
    },
    userInfo:{
        display: "flex",
        alignItems: 'center',
    },
}));

export default useStyles;
