const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.verifytoken = async (req,res,next) => {

    try {
       
        const token =
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

        if(!token){
            return res.status(200).json( 
                {
                    success:false,
                    message:"token not available,please login again",
                }
            )
        }

        const secret_key = process.env.SECRET_KEY

        jwt.verify(token, secret_key, (err, decoded) => {
            if (err) {
                return res.status(200).json({
                    success: false,
                    message: "Token is not valid",
                });
            } else {
                
                if (decoded && decoded.user_id && decoded.user_email) {
                    req.user = decoded;
                    next();
                } else {
                    return res.status(200).json({
                        success: false,
                        message: "Invalid token payload",
                    });
                }
            }
        });
    

    }catch(err){
       return res.status(200).json( 
            {
                success:false,
                message:"Authorization faild",
            }
        )
    }
}