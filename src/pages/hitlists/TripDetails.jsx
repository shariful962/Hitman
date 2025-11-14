import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Icons from "../../utils/images"; // Your image imports
import { RiShareForwardLine } from "react-icons/ri";

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example data, you can replace with API/loader data
  const tripData = {
    title: "Cox's Bazar",
    date: "Aug 29, 2025 - Aug 31, 2025",
    mapImage: Icons.map, // Add your map image here
    days: [
      {
        title: "Day 1 - Beach & Chill",
        image: Icons.expedition2,
        itinerary: [
          {
            emoji: Icons.sun,
            text: "Morning: Arrive at Cox's Bazar — Check-in + Breakfast at Pousha Cafe",
          },
          {
            emoji: Icons.man,
            text: "Midday: Laboni Beach walk under the sun — relax, take photos, and enjoy sea breeze.",
          },
          {
            emoji: Icons.evening,
            text: "Evening: Sunset at Sugandha Beach — enjoy the golden sky, soft breeze, and calm waves as the day fades.",
          },
          {
            emoji: Icons.dinner,
            text: "Dinner: Mermaid Cafe",
          },
        ],
      },
      {
        title: "Day 2 - Adventure & Sightseeing",
        image: Icons.expedition3, // Replace with another day image if available
        itinerary: [
          {
            emoji: Icons.sun,
            text: "Morning: Visit Himchari National Park — enjoy waterfalls and scenic views.",
          },
          {
            emoji: Icons.man,
            text: "Midday: Explore Inani Beach — snorkeling and relaxing by the rocks.",
          },
          {
            emoji: Icons.evening,
            text: "Evening: Watch sunset from Laboni Beach and street shopping nearby.",
          },
          {
            emoji: Icons.dinner,
            text: "Dinner: Try local seafood at Fisherman's Wharf.",
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto text-white mt-10 space-y-8 pt-28 pb-4">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 text-white/80 hover:text-white"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Map */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={tripData.mapImage}
          alt="Trip map"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Trip title + date + buttons */}
      <div className=" mt-8 mb-6">
        <div>
          <h1 className="text-3xl font-semibold">{tripData.title}</h1>
          <p className="text-white/70">{tripData.date}</p>
        </div>
        <div className="flex gap-3">
          <div className="py-2 rounded-lg flex items-center gap-2">
            <img
              src={Icons.profile1}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <button className="bg-dark2 px-3 py-[6px] text-Primary rounded text-sm cursor-pointer flex items-center gap-x-1.5">
              {" "}
              <RiShareForwardLine size={23} /> Share your Hitlist
            </button>
            <button className="bg-dark2 px-3 py-[6px] rounded text-sm cursor-pointer flex items-center gap-x-1.5">
              {" "}
              <img src={Icons.calIcn} alt="" className="w-6 h-6" /> Add to calender
            </button>
          </div>
        </div>
      </div>

      {/* Daily itinerary cards */}
      {tripData.days.map((day, idx) => (
        <div key={idx} className="bg-dark2 rounded-xl p-4 space-y-4  w-[600px]">
          <h2 className="text-xl font-semibold">{day.title}</h2>
          <div className="h-[200px] overflow-hidden rounded-xl">
            <img
              src={day.image}
              alt={day.title}
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="space-y-2 mt-2">
            {day.itinerary.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={item.emoji} alt="" className="w-6 h-6" />
                <p className="text-white/80">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TripDetails;
