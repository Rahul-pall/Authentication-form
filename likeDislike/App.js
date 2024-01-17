require("dotenv").config();
const express=require('express');
const router=require('./Routes/auth');
const app=express();
const database=require("./utils/db");
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use('/api',router);

database().then(()=>{
  const port=5000; 
  app.listen(port,()=>{
     console.log(`http://localhost:${port}`);
  });
})

