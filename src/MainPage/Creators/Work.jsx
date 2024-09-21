import React from "react";
import { useNavigate } from "react-router-dom";

function Work() {
  const navigate = useNavigate();

  let professions = [
    {
      img: "./imgs/doctor.jpg",
      name: "Doctor",
      rating: "⭐ 4.7",
      workers: "350",
    },
    {
      img: "./imgs/Engineer.jpg",
      name: "Engineer",
      rating: "⭐ 4.5",
      workers: "280",
    },
    {
      img: "./imgs/Lawyer.webp",
      name: "Teacher",
      rating: "⭐ 4.8",
      workers: "120",
    },
    {
      img: "./imgs/Teacher.png",
      name: "Lawyer",
      rating: "⭐ 4.3",
      workers: "90",
    },
    {
      img: "url-to-image-5",
      name: "Architect",
      rating: "⭐ 4.6",
      workers: "65",
    },
    {
      img: "url-to-image-6",
      name: "Nurse",
      rating: "⭐ 4.9",
      workers: "500",
    },
    {
      img: "url-to-image-7",
      name: "Electrician",
      rating: "⭐ 4.4",
      workers: "220",
    },
    {
      img: "url-to-image-8",
      name: "Mechanic",
      rating: "⭐ 4.2",
      workers: "300",
    },
    {
      img: "url-to-image-9",
      name: "Chef",
      rating: "⭐ 4.8",
      workers: "150",
    },
    {
      img: "url-to-image-10",
      name: "Pilot",
      rating: "⭐ 4.9",
      workers: "45",
    },
    {
      img: "url-to-image-11",
      name: "Pharmacist",
      rating: "⭐ 4.6",
      workers: "80",
    },
    {
      img: "url-to-image-12",
      name: "Designer",
      rating: "⭐ 4.7",
      workers: "210",
    },
  ];

  const handleClick = (professionName) => {
    navigate(`/profession/${professionName}`);
  };

  return (
    <div className="bg-white text-gray-900 py-10">
      <h2 className="text-center text-3xl font-bold mb-8">Top Professions</h2>
      <p className="text-center text-xl mb-10 text-gray-700">
        Discover highly-rated professionals in various industries
      </p>
      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {professions.map((profession, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleClick(profession.name)}
          >
            <img
              src={profession.img}
              alt={profession.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{profession.name}</h3>
            <p className="text-sm text-gray-600">{profession.rating}</p>
            <p className="text-sm text-gray-600">Workers: {profession.workers}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
