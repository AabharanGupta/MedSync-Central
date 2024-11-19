import {connect} from "mongoose";

const dbConnect=async()=>{
    try{
        const mongoDbConnection= await connect(process.env.CONNECTION_STRING);
        console.log(`Database connected to host: ${mongoDbConnection.connection.host}`);
    }
    catch(error){
        console.log(`ERROR: ${error}`);
        process.exit(1)
    }
};
export  default dbConnect;