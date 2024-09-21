import React, { useState } from "react";

const allCreators = [
    {
      id: 1,
      name: "Jaydon Ekstrom Bothman",
      image: "https://img.freepik.com/premium-vector/professional-rounded-user-icon-vector-illustration_1322553-59425.jpg?w=1380",
      rating: 5 // Example rating
    },
    {
      id: 2,
      name: "Ruben Carder",
      image: "https://img.freepik.com/premium-photo/picture-man-with-shirt-that-says-hes-man_1057389-84889.jpg?w=826",
      rating: 5
    },
    {
      id: 3,
      name: "Alfredo Septimus",
      image: "https://img.freepik.com/premium-vector/customizable-flat-vector-user-avatar-trendy-style-premium-icon_142112-12263.jpg?w=826",
      rating: 5
    },
    {
      id: 4,
      name: "Davis Franci",
      image: "https://img.freepik.com/premium-vector/collection-hand-drawn-profile-icons_1323905-5.jpg?w=826",
      rating: 5
    },
    {
      id: 5,
      name: "Livia Rosser",
      image: "https://img.freepik.com/premium-vector/women-icon-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-female-portraits-group-team-adorable-girl-isolated-white-background_275421-248.jpg?w=826",
      rating: 4.5
    },
    {
      id: 6,
      name: "Kianna Donin",
      image: "https://img.freepik.com/premium-vector/user-icon-young-asian-woman-with-short-black-hair-flat-style_173706-1584.jpg?w=826",
      rating: 4.5
    },
    {
      id: 7,
      name: "Phillip Lipshutz",
      image: "https://img.freepik.com/premium-photo/avatar-resourcing-company_1254967-6653.jpg?w=826",
      rating: 4
    },
    {
      id: 8,
      name: "Milo Bergman",
      image: "https://img.freepik.com/premium-photo/picture-man-with-shirt-that-says-hes-man_1057389-84889.jpg?w=826",
      rating: 4
    },
    {
      id: 9,
      name: "Kira Felix",
      image: "https://img.freepik.com/premium-vector/3d-vector-young-woman-avatar-icon-design_624031-141.jpg?w=826",
      rating: 3
    },
    {
      id: 10,
      name: "Ariana Lee",
      image: "https://img.freepik.com/premium-vector/avatar-girl-cute-female-image-ordinary-girl-fashionable-flat-style_15870-697.jpg?w=826",
      rating: 2.5
    },
    {
      id: 11,
      name: "Ellie Santiago",
      image: "https://img.freepik.com/premium-photo/woman-with-clock-that-says-she-is-smiling_1221953-49095.jpg?w=826",
      rating: 2.2
    },
    {
      id: 12,
      name: "Sam Quentin",
      image: "https://img.freepik.com/premium-photo/picture-man-with-shirt-that-says-hes-man_1057389-84889.jpg?w=826",
      rating: 1
    }
];

const CreatorCard = ({ creator }) => (
  <div className="dark:bg-gray-800 dark:text-white p-4 rounded-lg mx-auto shadow-lg w-[300px] transition duration-300 ease-in-out hover:scale-105">
    <img src={creator.image} alt={creator.name} className="w-[160px] h-[160px] mx-auto object-cover rounded-full" />
    <h3 className="text-xl font-bold text-center">{creator.name}</h3>
    <p className="text-center">Serviced: {creator.rating} times</p>
    <div className="flex mt-2 ml-[80px]">
      {Array.from({ length: creator.rating }, (_, index) => (
        <span key={index} className="text-yellow-500">⭐</span>
      ))}
    </div>
  </div>
);

const Creators = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSeeAll = () => {
    setVisibleCount(visibleCount + 4);
  };

  const handleBack = () => {
    setVisibleCount(8);
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen p-4" id="service">
      <h1 className="dark:text-white text-3xl mb-4 text-center font-bold">Top Creators</h1>
      <p className="dark:text-gray-400 text-center">Checkout Top Rated Creators on the NFT Marketplace</p>
      <div className="flex w-[1400px] mx-auto gap-[20px] flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px]">
        {allCreators.slice(0, visibleCount).map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
      <div className="mt-4">
        {visibleCount < allCreators.length && (
          <button onClick={handleSeeAll} className="bg-blue-500 ml-[900px] w-[120px] m-8 text-white px-4 py-2 rounded">
            See All
          </button>
        )}
        {visibleCount > 8 && (
          <button onClick={handleBack} className="bg-gray-700 text-white px-4 py-2 rounded ml-[900px] w-[120px] m-8">
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Creators;
