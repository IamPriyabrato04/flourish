'use client';
import React from 'react';
import { toast } from 'sonner';
import { signOut } from 'next-auth/react';
import { LucideLogOut } from 'lucide-react';

const SignoutButton = () => {
  const handleSignout = async () => {
    try {
      await signOut({ redirect: false, callbackUrl: '/login' }); // prevent auto-redirect
      toast('Logged out successfully!');
    } catch (err) {
      console.error('Error signing out:', err);
      toast('Failed to log out');
    }
  };

  return (
    <>
      <button
        onClick={handleSignout}
        className="flex flex-col items-center justify-center rounded-xl bg-red-400 p-4 text-sm font-medium text-white hover:bg-red-300"
      >
        <LucideLogOut className="h-5 w-5" />
      </button>
    </>
  );
};

export default SignoutButton;
