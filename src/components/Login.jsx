import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate =useNavigate();
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const submitData= async(e)=>{
    e.preventDefault();
    try{
        let data=await axios.post(`http://localhost:5000/api/login`,{email,password});
        console.log("data",data);
        alert("you have login successfully")
        navigate("/")
    }
    catch{
       alert("email and password not match")
       console.log("wrong email")
    }
  }

  return (
    <>
    {/* {console.log("amail :"+email,"password :"+password)} */}
      <div className="bg-gray-200 font-sans text-gray-700 h-[99vh]">
        <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl text-center mb-12 font-thin">Login</h1>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-8">
                <form
                  method=""
                  className=""
                  action="#"
                  // onsubmit="return false;"
                >
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      name="email"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      required
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>

                    <input
                      type="text"
                      name="password"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      required
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>

                  <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                  onClick={submitData}>
                    Login
                  </button>
                </form>
              </div>

              <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <Link to='/registration' className="font-medium text-indigo-500"
                onClick={()=>navigate('/registration')}>
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
