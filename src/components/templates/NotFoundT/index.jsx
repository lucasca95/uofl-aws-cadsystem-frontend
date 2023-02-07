import React from 'react';
import useStyles from "./styles";

function NotFoundT() {
    const classes = useStyles()
    return (<div>
        <div className={classes.center}>
            <h1>Ups!</h1>
            <h3>404: Page not found</h3>
        </div>
    </div>);
}
export default NotFoundT;