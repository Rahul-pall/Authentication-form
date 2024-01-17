const mongoose=require('mongoose');

// const URI=process.env.MONGO_URI;
// const URI=`mongodb+srv://rahul:Rahulpal123@cluster0.vj28tfu.mongodb.net/`;
const URI="mongodb://localhost:27017/LoginPage"

const connect= async()=>{
try{
  mongoose.connect(URI);
  console.log("database is connected successflly")
}
catch{
  console.log("database is not connected");
}
}

module.exports=connect;

