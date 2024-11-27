import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register,loginUser } from '../src/service/authapi';

const LoginForm=({onLoginSuccess})=>{
    const [isRegister,setisRegister]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [error,setError]=useState("");
    const [message,setMessage]=useState("");

    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            const {data}=await loginUser(username,password);
            setMessage(data.message);
            setUsername("");
            setPassword("");
            onLoginSuccess(data);
            setError("");
        }catch(error){
            console.log("The error is",error.message);
            setUsername("");
            setPassword("");
            setMessage("");
            setError("Invalid login")
        }
    }
    const handleRegister=async(e)=>{
        e.preventDefault();
        try{
            const {data}=await register(username,password);
            setisRegister(false);
            setMessage(data.message);
            setUsername("");
            setPassword("");
            setconfirmPassword("");
            setError("")
        }catch(error){
            console.log("The error is",error.message);
            setUsername("");
            setPassword("");
            setconfirmPassword("");
            setMessage("");
            setError("An error occcured")
        }
    }
    const handleRegisterToggle=()=>{
        setisRegister(!isRegister);
        setError("");
        setMessage("")
    }
    return(
        <form onSubmit={isRegister?handleRegister:handleLogin}
        className='bg-white rounded-lg shadow-md w-full max-w-sm max-auto'>
            <div>
                <h2 className='text-3xl-text-center font-extralight'>{isRegister?"Create Account":"Login"}   </h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6'></hr>
            <p className='text-center text-gray-600 text'>
                {isRegister?"Looks like you are new here":"Glad to see you again"}
            </p>
            <div className='p-6'>
                <div className='mb-4'>
                    <label className='text-gray-600 text-sm'>Username</label>
                    <input
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        className='w-full p-2 border rounded mt-2'
                        placeholder='Enter your username'
                        required    
                    />
                </div>
                <div className='mb-4'>
                    <label className="text-gray-600 text-sm">Password</label>
                    <input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='w-full p-2 border rounded mt-2'
                        placeholder='Enter your password'
                        required    
                    />
                </div>
                {isRegister?(
                    <div className='mb-4'>
                    <label className='text-gray-600 text-sm'>Confirm Password</label>
                    <input
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e)=>setconfirmPassword(e.target.value)}
                        className='w-full p-2 border rounded mt-2'
                        placeholder='Enter password again'
                        required    
                    />
                </div>
                ):(
                    ""
                    )
                }
                {error && <p className='text-red-500 text-sm mb-3'>
                    {error}
                </p>}
                {message && <p className='text-green-600 text-sm mb-3'>
                    {message}
                </p>}
                <button 
                    type='submit' 
                    className='w-full bg-blue-500 text-white py-2 rounded-md'
                >
                    {isRegister?"Register":"Login"}
                </button>
                <div>
                    <p className='pt-4 text-center text-gray-600 text-sm'>
                        {isRegister
                        ?"Already have an account"
                        :"Dont have an account"}
                        <Link to="" onClick={handleRegisterToggle}>
                            {isRegister?"Login":"Create Account"}
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;