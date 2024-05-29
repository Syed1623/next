import { redirect } from 'next/navigation';
import React from 'react'

const ContactPage = () => {

    const LoginDetails = null;
    if(LoginDetails === null){
        redirect("login")
    }
  return (
    <div>
      <h1 className='flex justify-center items-center h-screen text-red-300 bg-black'>ContactPage</h1>
    </div>
  )
}

export default ContactPage
