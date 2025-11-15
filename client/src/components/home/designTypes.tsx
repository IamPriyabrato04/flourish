import { designTypes } from '@/config';
import React from 'react';

export default function DesignTypes() {
  return (
    <div className="grid grid-cols-4 gap-3 border-t pt-8 sm:grid-cols-6 md:grid-cols-11">
      {designTypes.map((type, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`mb-2 flex h-14 w-14 flex-col items-center justify-center rounded-lg ${type.bgColor} text-white`}
          >
            <span className=""> {type.icon} </span>
          </div>
          <span className="text-center text-xs not-sm:text-[10px]">
            {type.label}
          </span>
        </div>
      ))}
    </div>
  );
}
