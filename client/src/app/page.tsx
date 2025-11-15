'use client';
import React from 'react';
import Header from '../components/home/header';
import { Banner } from '../components/home/banner';

const Home = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="ml-[72px] flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 pt-20">
          <Banner />
        </main>
      </div>
    </div>
  );
};

export default Home;
