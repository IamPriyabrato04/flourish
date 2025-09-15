"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { signIn } from "next-auth/react"


const LoginCard = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <Image
                width={80}
                height={80}
                src="/flourishio.png"
                alt="flourishio-logo"
            />
            <h2 className="text-2xl font-bold mb-4">Welcome back ! 👋 </h2>
            <p className="text-sm">
                Enter to get access designs, templates and also create your own ✨
            </p>

            <form className="mt-8 flex flex-col gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    className="w-full px-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your name"
                />

                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    className="w-full px-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                />

                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                    </button>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                >
                    Login
                </Button>
            </form>

            <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-500 text-sm">or continue with</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            <Button
                type="button"
                className="w-full bg-indigo-100 border-1 border-gray-500 text-gray-900 rounded-md hover:bg-indigo-200 transition duration-300 mt-1 flex items-center gap-2 justify-center"
                onClick={() => signIn("google")}
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
