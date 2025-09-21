"use client";
import React from "react";
import { toast } from "sonner";
import { signOut } from "next-auth/react";
import { LucideLogOut } from "lucide-react";

const SignoutButton = () => {

    const handleSignout = async () => {

        try {
            await signOut({ redirect: false, callbackUrl: "/login" }); // prevent auto-redirect
            toast("Logged out successfully!");
        } catch (err) {
            console.error("Error signing out:", err);
            toast("Failed to log out");
        }
    };

    return (
        <button onClick={handleSignout} className="flex flex-col items-center py-1 px-0 text-red-700 bg-red-300 justify-center p-0 text-sm font-medium rounded-xl hover:bg-red-500 opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <LucideLogOut className="h-5 w-5 rotate-180 text-red-700" />
            <span>logout</span>
        </button>
    );
};

export default SignoutButton;
