import React, { useEffect, useState } from "react";
import {useForm} from 'react-hook-form';
import {InputBase} from '@mui/material';
import useStyles from "./styles";


function ImagesSearchO(props) {
    const {register, handleSubmit, resetField} = useForm();
    const classes = useStyles();

    const onSubmit = (data) => {
        // console.log(data);
        resetField('imgcode');
        props.searchImg(data.imgcode)
    };
    
    return (
        <div className={classes.root}>
            <h3>Enter your image code</h3>
            <div className={classes.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.input}>
                        <InputBase type="text" {...register("imgcode", {required: true})} name="imgcode"/>
                    </div>
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
}
export default ImagesSearchO;