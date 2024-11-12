import express, { urlencoded } from "express";
import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();        //FETCH VALUES FROM .env
dbConnect();


const app=express();

//MIDDLEWARES
// app.use(json({limit:"100 mb"}))
const corsOptions={
    origin:["http/localhost:5173"],
    credentials:true,
}
app.use(cors(corsOptions));
app.use(urlencoded({limit:"100mb",extended:true}))
app.use(session({
    secret:process.env.SESSION_SECRET||"secret",
    resave:false,               //To not store in local memory
    cookie:{
        maxAge:60000*60             //max time for cookies in browser(session's time)
    }
}))
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
app.use("/api/auth",authRoutes)


//LISTEN
const PORT=process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})