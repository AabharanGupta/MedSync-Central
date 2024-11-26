import React, { useEffect, useState } from 'react';
import { setup2FA } from '../src/service/authapi';

const TwoFAsetup=({onSetupComplete})=>{
    const [message,setMessage]=useState("");
    const [response,setResponse]=useState("");
    
    const fetchQRCode=async()=>{
        const {data}=await setup2FA();
        console.log(data);
        
        setResponse(data);
    };


    useEffect(()=>{
        fetchQRCode();
    },[]);
    const copyClipBoard=async()=>{
        await navigator.clipboard.writeText(response.secret);
        setMessage("Secret copied")
    }
    
    return(
        <div 
        className='bg-white rounded-lg shadow-md w-full max-w-sm max-auto'>
            <div>
                <h2 className='text-3xl-text-center font-extralight'>Turn on 2FA Verification   </h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6'></hr>
            <p className='text-center text-gray-600 text'>
                Scan the QR Code below with your autheticator app
            </p>
            <div className='p-6'>
                <div className='flex justify-center'>
                    <img src={response.qrCode} alt="QR" className='mb-4 border rounded-md'></img>
                </div>
                <div className='flex items-center mt-3 mb-3'>
                    <div className='border-t border-l border-gray-200 flex-grow'></div>  
                    <div className='text-gray-600 text-sm font-light pr-2 pl-2'>
                        QR enter manually        
                    </div>
                    <div className='border-t border-l border-gray-200 flex-grow'></div>   
                </div>
                <div className='mb-6'>
                    {message && <p className='text-green-600'></p>}
                    <input 
                    readOnly 
                    defaultValue="" 
                    value={response.secret}
                    classname="w-full border rounded mt-2 text-xs"
                    onClick={copyClipBoard}
                    />
                </div>
                <button 
                onClick={onSetupComplete} 
                classname="w-full bg-blue-500">
                   Continue to verification 
                </button>
            </div>
        </div>
    )
}

export default TwoFAsetup;