import UserModal from "../Model/User.Modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async(req,res)=>{
    try {
        const { name,email,password,role} = req.body;
        console.log(name,email,password,role)

        if(!name || !email || !password || !role){
            return res.status(404).json({success:false,message:"All Fields Are mandtory"})
        }
        const isEmailExist = await UserModal.find({email:email})
        if(isEmailExist?.length){
            return res.status(404).json({success:false,message:"Email allreadY registerds pleas try diffrent email"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        const userData = new UserModal({ name,email,password:hashPassword,role})
        await userData.save();
        return res.status(200).json({success:true,message:"User Registerd",data:userData})
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }
}

export const Login = async (req,res)=>{
    try {
        const { email, password } = req.body//.userData;

        if (!email || !password) {
          return res.status(404).json({
            success: false,
            message: "All fields are mandatory",
          });
        }
    
        const user = await UserModal.findOne({ email:email });
    
        if (user) {
          const isPasswordMatch = await bcrypt.compare(password, user.password);
    
          if (isPasswordMatch) {
            const userObj = {
              name: user.name,
              email: user.email,
              _id: user._id,
              role: user.role,
            };
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
            return res.json({
              success: true,
              message: "Logged In Success",
              userData: userObj,
              token: token,
            });
          }
        }
        return res.json({
          success: false,
          message: "invalid Credential",
        });

        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }
}