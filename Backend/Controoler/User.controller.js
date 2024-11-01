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
            return res.status(404).json({success:false,message:"Email allreadY registerds please try diffrent email"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        const userData = new UserModal({ name,email,password:hashPassword,role})
        await userData.save();
        return res.status(200).json({success:true,message:"User Registerd",data:userData})
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }
}

export const Login = async (req, res) =>{
  try {
      const { email,password } = req.body

      if (!email || !password) return res.status(404).json({ success: false, message: "All fields are mandtory.." })

      const user = await UserModal.findOne({ email:email })
      if (!user) return res.json({ success: false, message: "User not found.." })

      // if (user.isBlocked) {
      //     return res.status(404).json({ success: false, message: "You are Blocked, Contact us." })
      // }

      const isPasswordRight = await bcrypt.compare(password, user.password);
      //  console.log(isPasswordRight, "isPasswordRight")
      if (isPasswordRight) {

          const userObeject = {
              name: user.name,
              email: user.email,
              _id: user._id,
              role: user.role
          }
        
          const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET)
          // console.log(token, "token her")
          return res.json({ success: true, message: "Login Successfull.", user: userObeject, token: token })
      }
      return res.json({ success: false, message: "Password is wrong." })
  } catch (error) {
      return res.json({ success: false, message:error.message })
  }
} 






 


export const getCurrentUser = async (req, res) => {
  try {
      const { token } = req.body;
      if (!token) return res.status(404).json({ success: false, message: "Token is required!" })

      const decoededData = jwt.verify(token, process.env.JWT_SECRET)
      // console.log(decoededData, "decoededData")
      if (!decoededData) {
          return res.status(404).json({ success: false, message: "Not valid json token.." })
      }
      // return res.send(decoededData)
      const userId = decoededData?.userId

      const user = await UserModal.findById(userId);

      if (!user) {
          return res.status(404).json({ success: false, message: "User not found.." })
      }

      const userObeject = {
          name: user?.name,
          email: user?.email,
          _id: user?._id,
          role: user?.role
      }

      return res.status(200).json({ success: true, user: userObeject })

  } catch (error) {
      return res.status(500).json({ success: false, message: error })
  }
}