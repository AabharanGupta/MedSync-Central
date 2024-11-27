import React from 'react';
import { useNavigate } from 'react-router-dom';
import TwoFAVerification from './TwoFAverification';
const Verify2FA=()=>{
    const navigate=useNavigate();
    const handleVerification=async(data)=>{
        if(data){
            navigate("/")
        }
    };

    const handle2FAReset=async()=>{
        if(data){
            navigate("setup-2fa");
        }
    }

    return(<TwoFAVerification 
    onVerifySuccess={handleVerification} 
    onResetSuccess={handle2FAReset}/>);
}

export default Verify2FA;