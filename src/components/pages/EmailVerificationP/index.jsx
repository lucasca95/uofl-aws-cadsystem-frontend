import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import VerificationService from "../../../services/VerificationService";

function EmailVerificationP({}) {
    const { token, email } = useParams();
    const [ready, setReady] = useState(false);
    const [tokenIsOK, setTokenIsOK] = useState(false);

    const userData = {
        'token': token,
        'email': email
    }

    

    const testEndpoint = () => {
        // VerificationService.testEndpoint()
        // .then((response)=>{
        //     console.log(response);
        // })
        // .catch((error)=>{console.log(error)})
        // .then(()=>{});

        VerificationService.verifyEmailPOST(userData)
        .then((response)=>{
            if (response.status === 200){
                setTokenIsOK(true);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        .then(()=>{
            setReady(true);
        });
    };
    

    useEffect(()=>{
        testEndpoint();
    }, []);

    return (
        (ready)
        ?
            <Navigate to='/home' replace />
        :
            <div></div>
    );
}
export default EmailVerificationP;