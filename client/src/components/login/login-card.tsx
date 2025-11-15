'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6">
      <Image
        width={80}
        height={80}
        src="/flourishio.png"
        alt="flourishio-logo"
      />
      <h2 className="mb-4 text-2xl font-bold">Welcome back ! 👋 </h2>
      <p className="text-sm">
        Enter to get access designs, templates and also create your own ✨
      </p>

      <form className="mt-8 flex flex-col gap-3">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          className="w-full rounded-md border border-indigo-300 px-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Enter your name"
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          className="w-full rounded-md border border-indigo-300 px-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Enter your email"
        />

        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            className="w-full rounded-md border border-indigo-300 px-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>

        <Button
          type="submit"
          className="w-full rounded-md bg-indigo-800 py-2 text-white transition duration-300 hover:bg-indigo-600"
        >
          Login
        </Button>
      </form>

      <div className="my-4 flex items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-sm text-gray-500">or continue with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <Button
        type="button"
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-md border-1 border-gray-500 bg-indigo-100 text-gray-900 transition duration-300 hover:bg-indigo-200"
        onClick={() => signIn('google', { redirectTo: '/home' })}
      >
        <Image
          width={26}
          height={26}
          src="https://img.icons8.com/color/96/google-logo.png"
          alt="google-logo"
        />
        Continue with Google
      </Button>
    </div>
  );
};

export default LoginCard;
