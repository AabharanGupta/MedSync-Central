import React from 'react';
import TwoFAsetup from './TwoFAsetup';
import { useNavigate } from 'react-router-dom';

const setup2FA=()=>{
    const navigate=useNavigate();
    const handleSetupComplete=()=>{
        navigate("/verify-2fa");
    }
    return(
        <TwoFAsetup onSetupComplete={handleSetupComplete}/>
    )
}

export default setup2FA;