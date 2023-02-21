import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import VerificationService from "../../../services/VerificationService";

function EmailVerificationP({}) {
    const { token, email } = useParams();
    const [ready, setReady] = useState(false);
    const [tokenIsOK, setTokenIsOK] = useState(true);
    const [msg, setMsg] = useState('');
    const userData = {
        'token': token,
        'email': email
    }
    const waitingTime = 10*1000;

    const testEndpoint = () => {
        VerificationService.verifyEmailPOST(userData)
        .then((response)=>{
            console.log(response);
            if (response.status === 200){
                setTokenIsOK(true);
            }
            setMsg(response.message);
        })
        .catch((error)=>{
            console.log(error);
        })
        .then(()=>{
            if (tokenIsOK){
                setTimeout(()=>{
                    setReady(true);
                }, waitingTime)
            }
        });
    };
    

    useEffect(()=>{
        testEndpoint();
    }, []);

    return (
        (!ready)
        ?
            <div>
                <CircularProgress color="inherit" />
                <h3>{msg}</h3>
                <p>Please wait while we take you to the login page.</p>
            </div>
        :
            <Navigate to='/home' replace />
            // (tokenIsOK)
            // ?
            // :
            //     <h1>Error: Your token couldn't be validated.</h1>   
    );
}
export default EmailVerificationP;