const express=require('express');
const router=express.Router();
const control=require('../controllers/auth.js');
const userModel=require('../models/user.js')

router.get('/', async(req,res)=>{
  const data =await userModel.find();
  res.send(data);
})

router.get('/delete', async(req,res)=>{
  const data =await userModel.deleteMany();
  res.send(data);
})
router.route('/login').post(control.login);
router.route('/register').post(control.register);
module.exports=router;