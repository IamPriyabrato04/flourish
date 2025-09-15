import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Image from 'next/image'

const LoginCard = () => {
    return (
        <div className='bg-white p-6 rounded-xl shadow-md w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Welcome back !</h2>
            <p className='text-sm text-center'>Enter to get access designs, templates and also create your one</p>

            <form className='mt-8 flex flex-col gap-4'>
                <Label htmlFor="email">Email</Label>
                <Input type='email' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter your email' />
                <Label htmlFor="password">Password</Label>
                <Input type='password' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter your password' />
                <Button type='submit' className='w-full bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300'>Login</Button>
            </form>
            <form>
                <Button type='button' className='w-full bg-indigo-300 text-white py-2 rounded-md hover:bg-indigo-400 transition duration-300 mt-4'>Login with Google
                    <Image width={26} height={26} src="https://img.icons8.com/color/96/google-logo.png" alt="google-logo" />
                </Button>
            </form>
        </div>
    )
}

export default LoginCard