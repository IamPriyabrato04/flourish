import React from "react";

const RecentDesigns = () => {
  const designs = Array(4)
    .fill(null)
    .map((_, index) => ({ id: index, name: `Design ${index + 1}` }));

  return (
    <div className="w-full pt-8 pr-2 ">
      <h2 className="text-xl font-semibold mb-4">Recent Designs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
        {designs.map((design) => (
          <div
            key={design.id}
            className="group cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="aspect-video bg-gray-100 rounded-lg mb-2 overflow-hidden transition-shadow" />
            <p className="font-semibold">{design.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDesigns;
