import { makeStyles } from "@material-ui/core/styles";
const colors = [
    '#D01B59',
    '#B62355',
    '#88304E',
    '#522546',
    '#311D3F',
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // color: '#fff',
        // height: '60%',
        backgroundColor:"#eee",
        // borderStyle: 'radius',
        borderRadius: '2%',
        padding: '10%',
        "& h1":{
            textAlign: 'center',
        }
    },
    description:{
        margin: '3%',
    },
    form:{
        display: 'flex',
        margin: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        "& .element":{
            margin: "1%",
        }
    },
    buttonArea:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor: '#fff',
        width: '25%',
    },
    buttonRegister:{
    },
    buttonLogIn:{

    },

}));

export default useStyles;
