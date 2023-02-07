import React from "react";
import useStyles from "./styles";


function ImageItemM(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <h3>{props.name}</h3>
            <img className={classes.image} src={props.source} alt={props.altText}/>
        </div>
    );
}
export default ImageItemM;