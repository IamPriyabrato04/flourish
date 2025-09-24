import React from "react";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  return (
    <div className="relative h-fit w-full rounded-lg isolate overflow-hidden bg-gradient-to-br 
                    from-gray-100 via-gray-200 to-gray-300 px-8 py-4 shadow-md">
      <div className="relative max-w-full mx-auto text-center space-y-5">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight 
                       text-gray-800">
          Create something amazing...
        </h2>
        <p className="text-lg sm:text-xl leading-7 text-gray-600 max-w-2xl mx-auto">
          Start building your next project with our powerful tools and features.
        </p>
        <Button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 rounded-md transition-all duration-200">
          Get started
        </Button>
      </div>
    </div>
  );
};
