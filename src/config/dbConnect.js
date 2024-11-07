import {connect} from "mongoose";

const dbConnect=async()=>{
    try{
        const mongoDbConnection= await connect(process.env.CONNECTION_STRING);
        console.log(`connect${mongoDbConnection.connection.host}`);
    }
    catch(error){
        console.log(`ERROR aagya bhai:${error}`);
        process.exit(1)
    }
};
export  default dbConnect;