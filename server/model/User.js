import mongoose  from "mongoose";
export const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide unique Username"],
        unique:[true,"Username exist"]
    },
    password:{
        type:String,
        required:[true,"please provide a password"],
        unique:false
    },
    email:{
        type:String,
        required:[true,"please provide a unique email"],
        unique:true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    },
    profile:{
        type:String
    }

})

export default mongoose.model.Users ||  mongoose.model('User', UserSchema)



