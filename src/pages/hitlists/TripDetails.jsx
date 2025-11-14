import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Icons from "../../utils/images"; // Your image imports

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
            emoji: "🌤️",
            text: "Morning: Arrive at Cox's Bazar — Check-in + Breakfast at Pousha Cafe",
          },
          {
            emoji: "🏖️",
            text: "Midday: Laboni Beach walk under the sun — relax, take photos, and enjoy sea breeze.",
          },
          {
            emoji: "🌅",
            text: "Evening: Sunset at Sugandha Beach — enjoy the golden sky, soft breeze, and calm waves as the day fades.",
          },
          {
            emoji: "🍽️",
            text: "Dinner: Mermaid Cafe",
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto text-white mt-10 space-y-8 pt-28 pb-4">
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4  mt-20 mb-6">
        <div>
          <h1 className="text-3xl font-semibold">{tripData.title}</h1>
          <p className="text-white/70">{tripData.date}</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center gap-2">
            <span>Share your Hostel</span>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center gap-2">
            Add to Calendar
          </button>
        </div>
      </div>

      {/* Daily itinerary cards */}
      {tripData.days.map((day, idx) => (
        <div key={idx} className="bg-dark2 rounded-xl p-4 space-y-4">
          <h2 className="text-xl font-semibold">{day.title}</h2>
          <div className="h-[200px] w-full overflow-hidden rounded-xl">
            <img
              src={day.image}
              alt={day.title}
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="space-y-2 mt-2">
            {day.itinerary.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span>{item.emoji}</span>
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

