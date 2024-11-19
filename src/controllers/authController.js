import bcrypt from "bcryptjs";
import speakeasy from "speakeasy";
import qrCode from "qrcode";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const register= async(req,res)=>{
    try{
        const {username,password}= req.body;
        const hashedPassword= await bcrypt.hash(password,10);
        const newUser=new User({
            username,
            password: hashedPassword,
            isMfaActive:false,
        });
        console.log("New User: ",newUser);
        await newUser.save()
        res.status(200).json({message:"User Registered Successfully"});
    }catch(error){
        res.status(500).json({error:"Error Registering User",message: `${error}`})
    }
}

export const login= async(req,res)=>{
    console.log("The authenticated user is:",req.user);
    res.status(200).json({
        message:"User logged in successful",
        username: req.user.username,
        isMfaActive:req.user.isMfaActive,
    })
}

export const authStatus= async(req,res)=>{
    if(req.user){
        res.status(200).json({
            message:"User logged in successful",
            username: req.user.username,
            isMfaActive:req.user.isMfaActive, 
        })
    }else{
        res.status(401).json({message:"Unauthorised User"})
    }
}

export const logout= async(req,res)=>{
    if(!req.user) res.status(401).json({message:"Unauthorised User"});
    req.logout((err)=>{
        if(err) res.status(400).json({message:"User Not Logged in"});
        res.status(200).json({message:"Logged out successfully"});
    })
}

export const setup2FA= async(req,res)=>{
    try {
        console.log("The req user is: ",req.user);
        const user=req.user;
        var secret = speakeasy.generateSecret();
        console.log("The secret object is: ",secret);
        user.twoFactorSecret=secret.base32;
        user.isMfaActive=true;
        await user.save();
        const url=speakeasy.otpauthURL({
            secret:secret.base32,
            label:`${req.user.username}`,
            encoding:"base32",
        });
        const qrImageUrl=await qrCode.toDataURL(url);
        res.status(200).json({
            secret:secret.base32,
            qrCode: qrImageUrl,
        })
    } catch (error) {
        res.status(500).json({error:"Error setting up 2fa",message: `${error}`})
    }
    
}

export const verify2FA= async(req,res)=>{
    
}

export const reset2FA= async(req,res)=>{
    
}