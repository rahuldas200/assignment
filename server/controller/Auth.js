const User = require('../model/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.registration = async (req,res)=> {
    try{
        const {email,name,password,confirmPassword} = req.body;

        if(!email || !name || !password || !confirmPassword){
            return res.status(400).json( {
                success:false,
                message:"All field are required"
            })
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"passwords are not matched"
            })
        }

        const userExits = await User.findOne({email});

        if(userExits){
            return res.status(400).json({
                success:false,
                message:"User already registered, Please login"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            email,
            password:hashedPassword,
            name
        });

        if(user){
            return res.status(200).json({
                success:true,
                message:"User registered successfully"
            })
        }
    } catch(err){
        return res.status(400).json({
            success:false,
            message:"Something went wrong !"
        })
    }
}


exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User not found, please sign up again",
        });
      }

      console.log(user);
  
      const passwordVerify = await bcrypt.compare(password, user.password);
  
      if (!passwordVerify) {
        return res.status(400).json({
          success: false,
          message: "Password is not matched, please try again",
        });
      }
  
      const payload = {
        user_id: user._id,
        user_email: user.email,
      };
        
      const newToken = await jwt.sign(payload, process.env.SECRET_KEY);

      console.log(newToken)
  
      if (!newToken) {
        return res.status(400).json({
          success: false,
          message: "Token is not created, please try again",
        });
      } 
  
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          token: newToken,
        },
        { new: true }
      );

      if (updatedUser) {
        return res.status(200).json({
          success: true,
          message: "User logged in successfully",
          token:updatedUser.token,
          userId:updatedUser.id
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Login failed",
      });
    }
};

exports.getUser = async(req,res) => {
  try{
    const {user_id,user_email} = req.user;
    console.log(req.body)
    console.log(req.user)

    if(!user_id || !user_email){
      return res.status(400).json({
        success:false,
        message:"User id not found"
      })
    }

    const user = await User.findById(user_id)
    if(!user){
      return res.status(400).json({
        success:false,
        message:"User not found"
      })
    }

    const { password, ...userDetail } = user._doc || user;
   
    return res.status(200).json({
      success:true,
      message:"User find successfully",
      data:userDetail
    })

  } catch(error){
    return res.status(400).json({
      success:false,
      message:'Something went wrong !'
    })
  }
}
  
