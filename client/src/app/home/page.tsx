// import AiFeatures from "@/components/home/ai-features";
import { Banner } from '@/components/home/banner';
import DesignTypes from '@/components/home/designTypes';
import RecentDesigns from '@/components/home/recent-designs';
import React from 'react';

const Home = () => {
  return (
    <div className="flex h-full w-screen flex-col bg-gray-100 pl-2">
      <Banner />
      <DesignTypes />
      {/* <AiFeatures /> */}
      <RecentDesigns />
    </div>
  );
};

export default Home;
