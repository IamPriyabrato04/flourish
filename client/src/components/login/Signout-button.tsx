"use client";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

const SignoutButton = () => {

    const handleSignout = async () => {
        console.log("Signing out...");

        try {
            await signOut({ redirect: false, callbackUrl: "/login" }); // prevent auto-redirect
            toast("Logged out successfully!");
        } catch (err) {
            console.error("Error signing out:", err);
            toast("Failed to log out");
        }
    };

    return (
        <Button variant="destructive" onClick={handleSignout}>
            Signout
        </Button>
    );
};

export default SignoutButton;
