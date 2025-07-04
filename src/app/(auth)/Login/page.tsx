import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Login</h1>
      <p>Please enter your credentials to log in.</p>
      {/* Include a login form here */} 
      <form className='flex flex-col space-y-4'>
        <input type='email' placeholder='Email' className='p-2 border rounded' required />
        <input type='password' placeholder='Password' className='p-2 border rounded' required />
        <button type='submit' className='p-2 border border-white text-white rounded'>Login</button>
      </form>
    </div>
  )
}
