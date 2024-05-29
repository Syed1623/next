import { redirect } from 'next/navigation';
import React from 'react'

const Home = () => {

    const loginDetails = null;
    if(loginDetails === null){
        redirect("login?search=product1&message=hiii")
    }

    
  return (
    <div>
      <h1 className='flex justify-center items-center h-screen text-3xl text-pink-300'>Home Page</h1>
    </div>
  )
}

export default Home
