import { Button, CircularProgress, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, InputLabel, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useStore } from '../../../common/Context';
import Layout from '../Layout';
import useStyles from "./styles";

function RegisterT({
    validatingCredentials,
    onSubmit
}) {
    const classes = useStyles();
    const {register, handleSubmit, resetField} = useForm();
    const [{needToRegister}, dispatch] = useStore();

    const submitHandler = (data)=>{
        // console.log(data);
        resetField('userFirstName'); 
        resetField('userLastName'); 
        resetField('userEmail'); 
        resetField('userPassword'); 
        onSubmit(data);
    }

    return (
        <Layout>
            <div className={classes.root}>
                <h1>Create an account</h1>
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
                                    name='userFirstName'
                                    label="First name"
                                    required
                                    {...register("userFirstName")}
                                    autoComplete='off'
                                />
                            </FormControl>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <TextField
                                    // required
                                    name='userLastName'
                                    label="Last name"
                                    required
                                    {...register("userLastName")}
                                    autoComplete='off'
                                />
                            </FormControl>
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
                                <Button type='submit' variant="contained">REGISTER</Button>
                            </FormControl>
                            <FormControl variant='filled' sx={{padding:1}}>
                                <div style={{textAlign:'center', marginBottom: '8px'}}>
                                    You already have an account?
                                </div>
                                <Button variant="outlined"
                                onClick={()=>{
                                    dispatch({
                                        type: 'setNeedToRegister',
                                        payload: false
                                    });
                                }}>LOGIN</Button>
                            </FormControl>
                        </FormGroup>
                    </form>
                    }
                </Paper>
            </div>
        </Layout>
    );
}
export default RegisterT;