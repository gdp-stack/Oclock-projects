import React from "react";

const PageTest = () => {
  const leadership = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: "https://via.placeholder.com/64",
    },
    {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "https://via.placeholder.com/64",
    },
    {
      name: "Dries Vincent",
      role: "Business Relations",
      imageUrl: "https://via.placeholder.com/64",
    },
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl: "https://via.placeholder.com/64",
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      imageUrl: "https://via.placeholder.com/64",
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      imageUrl: "https://via.placeholder.com/64",
    },
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Meet our leadership</h2>
      <p className="text-gray-600 mb-8">
        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
        elementum enim vitae ullamcorper suspendisse.
      </p>
      <div className="grid grid-cols-2 gap-8">
        {leadership.map((leader, index) => (
          <div key={index} className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={leader.imageUrl}
              alt={leader.name}
            />
            <div>
              <h3 className="text-lg font-semibold">{leader.name}</h3>
              <p className="text-indigo-600">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageTest;
