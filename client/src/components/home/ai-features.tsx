import { Sparkles } from 'lucide-react';
import React from 'react';

const AiFeatures = () => {
  return (
    <div className="mx-auto mt-12 mb-8 flex w-full flex-col items-center justify-center rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-white shadow transition hover:shadow-lg">
      <h2 className="mb-4 flex items-center text-2xl font-semibold text-gray-800">
        <Sparkles className="mr-2 inline-block text-yellow-400" />
        AI Image Creation
      </h2>
      <p className="text-gray-600">
        Leverage the power of AI to create stunning designs effortlessly.
      </p>
    </div>
  );
};

export default AiFeatures;
