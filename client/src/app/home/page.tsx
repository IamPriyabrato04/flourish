// import AiFeatures from "@/components/home/ai-features";
import { Banner } from "@/components/home/banner";
import DesignTypes from "@/components/home/designTypes";
import RecentDesigns from "@/components/home/recent-designs";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-screen h-full pl-2 bg-gray-100">
      <Banner />
      <DesignTypes />
      {/* <AiFeatures /> */}
      <RecentDesigns />
    </div>
  );
};

export default Home;
