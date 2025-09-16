"use client"
import LoginCard from '@/src/components/login/login-card'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  
  return (
    <div className="min-h-screen min-w-screen relative flex flex-col justify-center lg:flex-row bg-gray-100">

      {/* Overlay for small & medium devices */}
      <div className="flex flex-col justify-center items-center w-full lg:w-3/5 relative z-10 p-4">
        <div className="bg-white/70 p-6 rounded-xl shadow-xl w-full max-w-md lg:bg-white">
          <LoginCard />
        </div>
      </div>

      {/* Image section */}
      <div className="relative w-full lg:h-screen lg:w-2/5">
        <Image
          src={'/login_side_image.jpg'}
          alt="Login-Side-Image"
          height={800}
          width={600}
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default Login;