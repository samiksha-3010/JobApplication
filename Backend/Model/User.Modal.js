 import mongoose, { Schema } from "mongoose";

 const userSchema = new Schema({
    name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        require:true

     },
     password:{
        type:String,
        required:true
     },
     role:{
        type:"String",
        enum:["Admin","User"]
     }
 })



 export default mongoose.model("User",userSchema);