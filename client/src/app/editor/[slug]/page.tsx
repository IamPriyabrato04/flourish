'use client';
import SignoutButton from '@/components/login/Signout-button';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Editor() {
  const { data: session, status } = useSession();

  if (!session && status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <div>
      Editor
      <SignoutButton />
    </div>
  );
}
