const jwt = require("jsonwebtoken");
const User = require("../models/Signup");
require("dotenv").config();
const asynHandler= require("express-async-handler");


exports.auth =asynHandler(async(req,res,next) => {
    // try{
    //     //const token = req.body;
    //     if(!token){
    //         throw new Error('TOKEN MISSING');
    //     }
    //     try{
    //         const decode = jwt.verify(token,process.env.JWT_SECRET);
    //         req.user = decode;
    //     }catch(err){
    //         return res.status(401).json({
    //             success:false,
    //             message:'token is invalid',
    //         })
    //     }
    //     next();
    // }catch(err){
    //     console.log(err)
    //     return res.status(401).json({
    //         success:false,
    //         message:'token verfication failed',
    //     })
    // }
    let token;
    // let authHeader = req.headers[Authorization] || req.header.authorization
    // let authHeader = req.headers[Authorization] || req.header.authorization

    token= req.headers && req.headers["authorization"].split(' ')[1] || req.headers.authorization
   

     console.log("authtoken : ",token);
    if(token) {
      
        // token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).json({message:"user is not autherised"});
                console.log(err);
            }else{
                console.log("decoded",decoded);
               // req.id=decoded.id;
                console.log("auth section" ,decoded.id);
                req.user = decoded.id;
                // res.status(200).json({message:decoded});
                next();   
            }
        });
       
    }
    else{
        res.status(400).json({message:"authorization is not valid"})
    }
}
)

