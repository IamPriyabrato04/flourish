"use client"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'
import React from 'react'

export default function Editor() {
  const { data: session, status } = useSession();

  if (!session?.user && status === 'unauthenticated') {
    return redirect('/login');
  }

  console.log(session?.user);

  return (
    <div>Editor</div>
  )
}

