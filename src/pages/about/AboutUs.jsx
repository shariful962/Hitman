import React from "react";
import Icons from "../../utils/images";

export default function AboutUs() {
  return (
    <div className="containerBox">
      <div className="max-w-6xl mx-auto py-16 text-white px-4">
        {/* Header */}
        <h1 className="text-3xl md:text-[42px] font-medium text-left text-Primary mb-6 pt-24">
          About Us
        </h1>

        {/* Travel Image */}
        <div className="w-full mb-12">
          <img
            src={Icons.adv1}
            alt="Travel"
            className="h-[250px] w-[250px] md:w-3/4 rounded-xl shadow-lg object-cover"
          />
          {/* <img src={Icons.picture2}  alt="" className="w-[300px] h-auto" /> */}
        </div>

        {/* Our Story (Added Section) */}
        <section className="mb-14 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-Primary">
            Our Story
          </h2>

          <div className="space-y-5 text-gray-300 leading-7">
            <p>
              We’re <span className="font-bold text-lg">Granit and Maria</span>{" "}
              — partners in life, adventure, and now, travel innovation.
            </p>

            <p>
              <strong>Our story began the way the best ones do:</strong> with a
              shared curiosity for the world and a love for the kind of
              experiences you can’t find in guidebooks. From our first trip
              together, we knew travel wasn’t just about ticking off famous
              landmarks — it was about discovering those hidden cafés down quiet
              alleys, top-tier romantic dinners, and that tucked-away beach only
              locals know about.
            </p>

            <p>
              That bright blue alley? It’s just steps away from one of Puerto
              Rico’s best-kept secrets —{" "}
              <a
                href="https://www.marmaladepr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-Primary underline hover:text-Primary/80 transition"
              >
                Marmalade
              </a>
              . We didn’t read about it online, <strong>we found it the old-fashioned
              way:</strong> wandering hand in hand through town, letting curiosity lead
              us to something unforgettable.
            </p>

            <p>
              <strong>But here’s the problem we kept running into:</strong> finding these gems
              took hours — sometimes days — of scrolling through Instagram
              hashtags, Reddit threads, and endless blog posts. We wanted the
              magic without the marathon search before each trip.
            </p>

            <p>
              That’s when the idea for{" "}
              <span className="text-Primary font-semibold">Hitman Jack</span>{" "}
              was born. We decided to create a travel app that works like a
              well-connected friend who knows exactly what you like.
              Personalized itineraries. Handpicked experiences. The best of each
              place — without the information overload.
            </p>

            <p className="text-white font-medium">With Hitman Jack, you can:</p>

            <ul className="space-y-2 pl-4 list-disc ml-4">
              <li>
                <span className="font-bold">Discover</span> curated “things to do” lists based on your vibe,
                location, and travel dates.
              </li>
              <li>
                <span className="font-bold">Save</span> your favorite spots into collections you can revisit
                anytime.
              </li>
              <li>
               <span className="font-bold">Share</span> trip ideas easily with friends, family, or your travel
                crew.
              </li>
            </ul>

            <p>
              No more endless scrolling. No more decision fatigue. Just your
              trip, your way.
            </p>

            <p>
              Whether you’re chasing adrenaline, looking for romance, or craving
              a quiet escape, we built Hitman Jack Travel so you can spend less
              time searching and more time experiencing the moments that matter.
            </p>

            <p>We’ve lived it. We love it. And now we’re sharing it.</p>

            <p className="pt-2 font-semibold text-white">
              Maria & Granit
              <br />
              <span className="text-Primary">Founders, Hitman Jack Travel</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
