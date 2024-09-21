import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ creators }) => {
  const { id } = useParams();
  const creator = creators.find((creator) => creator.id === parseInt(id));

  if (!creator) {
    return <div className="text-center text-gray-700">User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md mb-4">
        <img
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          src={creator.image}
          alt={creator.name}
        />
        <h1 className="text-3xl font-bold mt-2">{creator.name}</h1>
        <p className="text-gray-600">{creator.jobs}</p>
      </div>
      <div className="flex justify-around bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="text-center">
          <span className="block text-lg font-medium">Earned</span>
          <span className="text-gray-800 font-semibold">{creator.change}</span>
        </div>
        <div className="text-center">
          <span className="block text-lg font-medium">Works</span>
          <span className="text-gray-800 font-semibold">{creator.nftsSold}</span>
        </div>
        <div className="text-center">
          <span className="block text-lg font-medium">Rating</span>
          <span className="text-gray-800 font-semibold">{creator.volume}</span>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-all mb-4">
        Rent
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Created Works</h2>
      {creator.works && creator.works.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {creator.works.map((nft) => (
            <div key={nft.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                className="w-full h-[300px] object-cover mb-2"
                src={nft.image}
                alt={nft.title}
              />
              <h3 className="text-lg font-semibold">{nft.title}</h3>
              <div className="flex justify-between mt-2">
                <span className="font-bold text-gray-700">{nft.year}</span>
                <span className="text-gray-500">{nft.price} sum</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          No NFTs created by this user.
        </div>
      )}
    </div>
  );
};

export default UserDetails;
