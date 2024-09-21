import { FaGlobe, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom"; // Make sure to import useParams
function DoctorProfile() {
  const { id } = useParams();

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

  const doctor = allTeams.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="bg-gray-100 p-10">
        <h1 className="text-3xl font-bold">Doktor topilmadi</h1>
      </div>
    );
  }

  const doctorWorks = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Ish ${index + 1}`,
    img: `https://via.placeholder.com/300x300?text=Ish+${index + 1}`,
    description: `Bu ${doctor.name}ning qilgan ishi.`,
  }));

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 h-80">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end p-6">
          <div className="text-center">
            <img
              src={doctor.image}
              alt="Doctor Profile"
              className="w-24 h-24 rounded-full border-4 border-white mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-white">{doctor.name}</h1>
            <p className="text-white">{doctor.jobs}</p>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div
        className=" text-white p-6 rounded-lg shadow-lg mx-10 mb-8"
        style={{ backgroundColor: "black", marginTop: "20px" }}
      >
        <div className="grid grid-cols-3 gap-6 text-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">{doctor.volume}</h2>
            <p className="text-gray-400">Volume</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Earned</h1>
            <h2 className="text-2xl font-bold">5k+</h2>
            {/* <p className="text-gray-400">NFTs Sold</p> */}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{doctor.followers}</h2>
            <button className="w-[120px] h-[40px] bg-[green] ">Connect</button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">Bio</h3>
          <p className="text-gray-400">{doctor.bio}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <FaGlobe className="text-2xl cursor-pointer hover:text-white" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-white" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-white" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Doctor Works */}
      <div className="grid grid-cols-3 gap-6 mx-10 mb-8">
        {doctorWorks.map((work) => (
          <div
            key={work.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-bold">{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorProfile;
