import { Sparkles } from "lucide-react";
import React from "react";

const AiFeatures = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-50 to-purple-50 text-white rounded-xl mb-8 mt-12 shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
        <Sparkles className="inline-block mr-2 text-yellow-400" />
        AI Image Creation
      </h2>
      <p className="text-gray-600">
        Leverage the power of AI to create stunning designs effortlessly.
      </p>
    </div>
  );
};

export default AiFeatures;
