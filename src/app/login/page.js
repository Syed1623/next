import React from 'react'

const Login = ({searchParams}) => {
  console.log(searchParams.search,searchParams.message)
  return (
    <div>
      <h1 className='flex justify-center items-center h-screen text-3xl text-pink-300'>Login Page</h1>
    </div>
  )
}

export default Login
