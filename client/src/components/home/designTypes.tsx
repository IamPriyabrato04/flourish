import { designTypes } from "@/config";
import React from "react";

export default function DesignTypes() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3 border-t pt-8">
      {designTypes.map((type, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`flex flex-col items-center justify-center w-14 h-14 mb-2 rounded-lg ${type.bgColor} text-white`}
          >
            <span className=""> {type.icon} </span>
          </div>
          <span className="text-center text-xs not-sm:text-[10px]">{type.label}</span>
        </div>
      ))}
    </div>
  );
}
