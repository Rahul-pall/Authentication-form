const userModel=require("../models/user")
const bcrypt =require('bcryptjs')

const login= async(req,res,next)=>{
   try{
     console.log(req.body);
     const {email,password}=req.body;

     const checkEmail=await userModel.findOne({email});
     const checkpassword=await userModel.findOne({password});
     if(!checkEmail){
      res.status(401).json("not match password")
     }
      else{
        const isPasswordMatch=await bcrypt.compare(password,checkEmail.password);
        if(!isPasswordMatch){
          return res.status(401).json("error email not match");
        }
        res.status(200).json("you have login succesfully");
        console.log("you have login successfully")
      }
   }
   catch{
    next();
   }
}

const register= async (req,res,next)=>{
  try{
    const {name,email,password}=req.body;

    const checkEmail=await userModel.findOne({email});
    const saltvalue=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,saltvalue);
    
    if(checkEmail){
     return res.status(400).json("already register")
    }
    const newdata=new userModel({
      name,
      email,
      password:hashPassword
    })
    await newdata.save();

    console.log(newdata);
    res.status(200).json(newdata);
  }
  catch{
    next();
    res.status(400).json("not found page")
  }
}

module.exports={login,register}