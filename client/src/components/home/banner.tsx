import React from 'react';
import { Button } from '@/components/ui/button';

export const Banner = () => {
  return (
    <div className="relative isolate h-fit w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-8 py-4 shadow-md">
      <div className="relative mx-auto max-w-full space-y-5 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Create something amazing...
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl">
          Start building your next project with our powerful tools and features.
        </p>
        <Button className="rounded-md bg-gray-700 px-6 font-medium text-white transition-all duration-200 hover:bg-gray-600">
          Get started
        </Button>
      </div>
    </div>
  );
};
