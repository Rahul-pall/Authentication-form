import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className='flex justify-center items-center h-[100vh] w-[100%] text-4xl'>
              <button className='border-2 px-8 py-2.5 bg-sky-400 text-white  hover:animate-bounce rounded-md' onClick={()=>navigate("/Registration")}>Logout</button>
      </div>
    </>
  )
}

export default Home
