import React, { useState } from "react";
import creatorsData from "../data/creators.json"; // Adjust path if necessary
import { Link } from "react-router-dom";

const TopCreators = () => {
  const allCreators = creatorsData;

  const [activeTab, setActiveTab] = useState("today");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("nftsSold");
  const [selectedJob, setSelectedJob] = useState("all");
  const [visibleCount, setVisibleCount] = useState(10);

  const jobTypes = [
    "all",
    ...new Set(allCreators.map((creator) => creator.jobs)),
  ];

  const filteredCreators = allCreators
    .filter(
      (creator) => activeTab === "all_time" || creator.period === activeTab
    )
    .filter((creator) =>
      creator.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((creator) => selectedJob === "all" || creator.jobs === selectedJob)
    .sort((a, b) => {
      if (sortBy === "nftsSold") {
        return b.nftsSold - a.nftsSold;
      } else if (sortBy === "volume") {
        const aVolume = parseFloat(a.volume);
        const bVolume = parseFloat(b.volume);
        return bVolume - aVolume;
      }
      return 0;
    });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Top Workers</h2>
      <p className="text-gray-400 mt-2">
        Check out the best workers on HireMe.
      </p>

      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-4">
          {["today", "week", "month", "all_time"].map((period) => (
            <button
              key={period}
              className={`py-2 px-4 font-semibold ${
                activeTab === period
                  ? "border-b-2 border-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(period)}
            >
              {period === "all_time"
                ? "All Time"
                : period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative">
          <select
            className="py-2 px-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
          >
            {jobTypes.map((jobType) => (
              <option key={jobType} value={jobType}>
                {jobType === "all" ? "All Jobs" : jobType}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <select
            className="py-2 px-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="nftsSold">Works (High to Low)</option>
            <option value="volume">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search workers..."
          className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-gray-400">
              <th className="text-left p-2">#</th>
              <th className="text-left p-2">Workers</th>
              <th className="text-left p-2">Jobs</th>
              <th className="text-left p-2">Earned</th>
              <th className="text-left p-2">Works</th>
              <th className="text-left p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredCreators.slice(0, visibleCount).map((creator, index) => (
              <tr
                key={creator.id}
                className="bg-gray-800 rounded-lg mb-2 transition-opacity duration-300 ease-in-out"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2 flex items-center">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <Link to={`/creator/${creator.id}`} className="text-white hover:underline">
                    {creator.name}
                  </Link>
                </td>
                <td className="p-2">{creator.jobs}</td>
                <td className="p-2">{creator.change}</td>
                <td className="p-2">{creator.nftsSold}</td>
                <td className="p-2">{creator.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleCount < filteredCreators.length && (
        <button
          className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default TopCreators;
