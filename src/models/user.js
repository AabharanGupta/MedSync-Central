import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    is2FA:{
        type:Boolean,
        required:false,
    },
    twoFAsec:{
        type:String,
    },
    
},
{
    timestamps:true,
}
);
const user= mongoose.model("User",userSchema);
export default user;