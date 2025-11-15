'use client';
import LoginCard from '@/components/login/login-card';
import Image from 'next/image';
import React from 'react';

const Login = () => {
  return (
    <div className="relative flex min-h-screen min-w-screen flex-col justify-center bg-gray-100 lg:flex-row">
      {/* Overlay for small & medium devices */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center p-4 lg:w-3/5">
        <div className="w-full max-w-md rounded-xl bg-white/70 p-6 shadow-xl lg:bg-white">
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
  );
};

export default Login;
