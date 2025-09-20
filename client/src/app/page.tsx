"use client"
import React from 'react'
import Header from '../components/home/header'
import { Banner } from '../components/home/banner'

const Home = () => {
  return (
    <div className='min-h-screen flex bg-white'>
      <div className='flex-1 flex-col ml-[72px]'>
        <Header />
        <main className='flex-1 p-6 overflow-y-auto pt-20'>
          <Banner />
        </main>
      </div>
    </div>
  )
}

export default Home