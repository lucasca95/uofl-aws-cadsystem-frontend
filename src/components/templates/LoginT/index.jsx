import React, { useEffect, useState } from 'react';
import { 
    Button,
    CircularProgress,
    FormControl,
    FormGroup,
    Paper,
    TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import Layout from '../Layout';
import useStyles from "./styles";
import { useStore } from '../../../common/Context';

function LoginT({
    validatingCredentials,
    onSubmit
}) {
    const classes = useStyles();
    const {register, handleSubmit, resetField} = useForm();
    const [{needToRegister}, dispatch] = useStore();

    const submitHandler = (data)=>{
        resetField('userEmail');resetField('userPassword');
        onSubmit(data);
    }

    return (
        <Layout>
            <div className={classes.root}>
                <h1>User login</h1>
                <Paper className={classes.paper} sx={{padding: 4}}>
                    {(validatingCredentials) ? 
                        <div className={classes.loading}>
                            <CircularProgress/>
                        </div>
                    :
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <FormGroup>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <TextField
                                    // required
                                    name='userEmail'
                                    label="Email address"
                                    type='email'
                                    required
                                    {...register("userEmail")}
                                    autoComplete='off'
                                />
                            </FormControl>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <TextField
                                    required
                                    name='userPassword'
                                    type='password'
                                    label="Password"
                                    {...register("userPassword")}
                                    autoComplete='off'
                                />
                            </FormControl>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <Button type='submit' variant="contained">LOGIN</Button>
                            </FormControl>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <Button variant="outlined" 
                                // type='submit'
                                onClick={()=>{
                                    dispatch({
                                        type: 'setNeedToRegister',
                                        payload: true
                                    });
                                }}
                                >REGISTER</Button>
                            </FormControl>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <Button>I FORGOT MY PASSWORD</Button>
                            </FormControl>
                        </FormGroup>
                    </form>
                    }
                </Paper>
            </div>  
        </Layout>
    );
}
export default LoginT;