import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProfessionPage() {
  const { name } = useParams();
  const navigate = useNavigate(); // Use for navigation

  // Sample data for the professionals
  const allTeams = [
    {
      id: 1,
      name: "Jaydon Ekstrom Bothman",
      jobs: "Singer",
      change: "15000 sum",
      nftsSold: 602,
      volume: "5 ⭐",
      period: "today",
      image:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    {
      id: 2,
      name: "Ruben Carder",
      jobs: "Painter",
      change: "12000 sum",
      nftsSold: 450,
      volume: "4 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 3,
      name: "Alfredo Septimus",
      jobs: "Chef",
      change: "17000 sum",
      nftsSold: 750,
      volume: "5 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 4,
      name: "Davis Franci",
      jobs: "Photographer",
      change: "13000 sum",
      nftsSold: 530,
      volume: "3 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 5,
      name: "Livia Rosser",
      jobs: "Architect",
      change: "14000 sum",
      nftsSold: 460,
      volume: "4 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 6,
      name: "Kianna Donin",
      jobs: "Designer",
      change: "18000 sum",
      nftsSold: 820,
      volume: "5 ⭐",
      period: "month",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 7,
      name: "Phillip Lipshutz",
      jobs: "Engineer",
      change: "20000 sum",
      nftsSold: 950,
      volume: "5 ⭐",
      period: "all_time",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 8,
      name: "Milo Bergman",
      jobs: "Writer",
      change: "9000 sum",
      nftsSold: 330,
      volume: "3 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 9,
      name: "Kira Felix",
      jobs: "Musician",
      change: "11000 sum",
      nftsSold: 400,
      volume: "4 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 10,
      name: "Ariana Lee",
      jobs: "Dancer",
      change: "16000 sum",
      nftsSold: 640,
      volume: "5 ⭐",
      period: "month",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 11,
      name: "Ellie Santiago",
      jobs: "Illustrator",
      change: "8000 sum",
      nftsSold: 290,
      volume: "3 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 12,
      name: "Sam Quentin",
      jobs: "Filmmaker",
      change: "14000 sum",
      nftsSold: 510,
      volume: "4 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 13,
      name: "Hana Bae",
      jobs: "Animator",
      change: "20000 sum",
      nftsSold: 850,
      volume: "5 ⭐",
      period: "month",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 14,
      name: "Max Stone",
      jobs: "Sculptor",
      change: "18000 sum",
      nftsSold: 780,
      volume: "5 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 15,
      name: "Aria Song",
      jobs: "Tattoo Artist",
      change: "17000 sum",
      nftsSold: 710,
      volume: "4 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 16,
      name: "Caden Taylor",
      jobs: "Fashion Designer",
      change: "11000 sum",
      nftsSold: 470,
      volume: "3 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 17,
      name: "Eva Huxley",
      jobs: "Graphic Designer",
      change: "10000 sum",
      nftsSold: 420,
      volume: "3 ⭐",
      period: "month",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 18,
      name: "Felix Moon",
      jobs: "Photographer",
      change: "16000 sum",
      nftsSold: 650,
      volume: "5 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 19,
      name: "Layla Fox",
      jobs: "Content Creator",
      change: "12000 sum",
      nftsSold: 480,
      volume: "4 ⭐",
      period: "month",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 20,
      name: "Oliver West",
      jobs: "Voice Actor",
      change: "19000 sum",
      nftsSold: 880,
      volume: "5 ⭐",
      period: "all_time",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 21,
      name: "Nina Sanchez",
      jobs: "Actress",
      change: "9000 sum",
      nftsSold: 340,
      volume: "3 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 22,
      name: "Mason Lee",
      jobs: "Painter",
      change: "15000 sum",
      nftsSold: 610,
      volume: "5 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 23,
      name: "Amelia Wright",
      jobs: "Fashion Designer",
      change: "20000 sum",
      nftsSold: 910,
      volume: "5 ⭐",
      period: "all_time",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 24,
      name: "Noah Evans",
      jobs: "Writer",
      change: "13000 sum",
      nftsSold: 550,
      volume: "4 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 25,
      name: "Liam Davis",
      jobs: "Artist",
      change: "17000 sum",
      nftsSold: 690,
      volume: "5 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 26,
      name: "Sophia Gray",
      jobs: "Musician",
      change: "16000 sum",
      nftsSold: 630,
      volume: "5 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 27,
      name: "Jack Ryder",
      jobs: "Actor",
      change: "18000 sum",
      nftsSold: 770,
      volume: "5 ⭐",
      period: "month",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 28,
      name: "Charlotte Pierce",
      jobs: "Dancer",
      change: "11000 sum",
      nftsSold: 430,
      volume: "3 ⭐",
      period: "today",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 29,
      name: "Lucas Kent",
      jobs: "Singer",
      change: "20000 sum",
      nftsSold: 920,
      volume: "5 ⭐",
      period: "all_time",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
    {
      id: 30,
      name: "Chloe Hart",
      jobs: "Chef",
      change: "13000 sum",
      nftsSold: 570,
      volume: "4 ⭐",
      period: "week",
      image:
        "https://bernardmarr.com/wp-content/uploads/2021/11/What-Are-NFTs-An-Easy-Explanation-For-Anyone.jpg",
    },
  ];

  const [filteredTeams, setFilteredTeams] = useState(allTeams);

  // Filter based on specialization and rating
  const handleFilterChange = (specialization, rating) => {
    const filtered = allTeams.filter((member) => {
      const matchesSpecialization = specialization
        ? member.jobs === specialization
        : true;
      const matchesRating = rating ? member.volume === rating : true;
      return matchesSpecialization && matchesRating;
    });
    setFilteredTeams(filtered);
  };

  // Handle navigation to a professional's detailed page
  const handleAccountClick = (id) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="bg-gray-100 p-10">
      <h2 className="text-2xl font-bold mb-6">{name} Jamoasi</h2>

      {/* Filter Selects */}
      <div className="flex mb-4">
        <select
          id="specializationSelect"
          className="border rounded p-1 mr-2 text-sm"
          onChange={(e) =>
            handleFilterChange(
              e.target.value,
              document.getElementById("ratingSelect").value
            )
          }
        >
          <option value="">Select Specialization</option>
          <option value="Singer">Singer</option>
          <option value="Painter">Painter</option>
          <option value="Chef">Chef</option>
          {/* Add more specializations as necessary */}
        </select>
        <select
          id="ratingSelect"
          className="border rounded p-1 text-sm"
          onChange={(e) =>
            handleFilterChange(
              document.getElementById("specializationSelect").value,
              e.target.value
            )
          }
        >
          <option value="">Select Rating</option>
          <option value="5 ⭐">5 ⭐</option>
          <option value="4 ⭐">4 ⭐</option>
          <option value="3 ⭐">3 ⭐</option>
        </select>
      </div>

      {/* Professional Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredTeams.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center cursor-pointer"
            onClick={() => handleAccountClick(member.id)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p>{member.jobs}</p>
              <p>{member.volume}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionPage;
