import React from 'react';

const RecentDesigns = () => {
  const designs = Array(4)
    .fill(null)
    .map((_, index) => ({ id: index, name: `Design ${index + 1}` }));

  return (
    <div className="w-full pt-8 pr-2">
      <h2 className="mb-4 text-xl font-semibold">Recent Designs</h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {designs.map(design => (
          <div
            key={design.id}
            className="group cursor-pointer rounded-lg bg-white p-4 shadow transition hover:shadow-lg"
          >
            <div className="mb-2 aspect-video overflow-hidden rounded-lg bg-gray-100 transition-shadow" />
            <p className="font-semibold">{design.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDesigns;
