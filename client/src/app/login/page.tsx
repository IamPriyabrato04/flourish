import LoginCard from '@/src/components/login/login-card'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen min-w-screen relative flex bg-gray-100 border-1 border-red-500'>
      <div className='flex flex-col justify-center items-center w-3/5'>
        <LoginCard />
      </div>
      <Image src={'/login_side_image.jpg'} alt='Login Side Image' width={500} height={500} className='h-screen w-2/5' />
    </div>
  )
}

export default Login