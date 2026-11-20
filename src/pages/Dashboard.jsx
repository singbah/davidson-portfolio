import { useNavigate } from "react-router-dom";
import profilePic from "../../static/photos/davidson_profile.jpg";
import LayoutWidget from "../components/Layout";
import { sermons } from "../utils";
import TestimonySection from "./Testimony";
import { Play, Calendar, MapPin, BookOpen, Clock } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleSermonDetails = (sermon) => {
    localStorage.setItem("previousSermon", JSON.stringify(sermon));
    navigate("/sermon-details");
  };

  return (
    <LayoutWidget>
      {/* HERO / PROFILE */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl p-6 md:p-10 text-white shadow-xl">
          <div className="order-2 md:order-1">
            <p className="text-orange-100 text-sm font-semibold tracking-widest">
              HELLO, I'M
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Davidson SM. Morris
            </h1>
            <p className="text-lg text-orange-100 mt-2">
              Minister of the Gospel, Teacher | Monrovia, Liberia
            </p>
            <p className="text-orange-50/90 mt-4 leading-relaxed max-w-md">
              A Teacher and Preacher called to share the Word of God, build
              faith, and serve the community with love and truth.
            </p>

            <p className="mt-4 text-sm italic text-orange-100 border-l-2 border-white/40 pl-3">
              "Preach the word; be prepared in season and out of season"
              <span className="block not-italic font-semibold mt-1">
                - 2 Timothy 4:2
              </span>
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="/sermons"
                className="bg-white text-orange-700 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition"
              >
                Watch Sermons
              </a>
              <a
                href="https://wa.me/231775390208?text=Hi%20Pastor%20Davidson%2C%20I%20need%20prayer"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/50 px-5 py-2.5 rounded-full hover:bg-white/10 transition"
              >
                Request Prayer
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl"
              src={profilePic}
              alt="Pastor Davidson S.M. Morris"
            />
          </div>
        </div>
      </div>

      {/* SERVICE TIMES */}
      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-orange-600 rounded-2xl flex items-center justify-center text-white shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold">Join Us This Sunday</p>
              <p className="text-gray-500 text-sm">
                Sunday Service - 9:00 AM | Bible Study - Wednesday 5:30 PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-orange-600" />
            Monrovia, Liberia
          </div>
        </div>
      </section>

      {/* SERMONS */}
      <section id="sermons" className="max-w-6xl mx-auto px-4 mt-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Recent Sermons</h2>
            <p className="text-gray-500 text-sm mt-1">
              Click any sermon to watch or listen
            </p>
          </div>
          <a
            href="/sermons"
            className="text-sm text-orange-600 font-semibold hidden md:block"
          >
            View All →
          </a>
        </div>

        <ul className="flex px-1 py-4 gap-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scrollbar-hide">
          {sermons.map((sermon, index) => (
            <li
              onClick={() => handleSermonDetails(sermon)}
              className="group relative border m-1 h-64 w-72 bg-orange-200 shrink-0 snap-start rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden shadow-md"
              key={index + 1}
            >
              {/* Play button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <Play className="w-5 h-5 text-orange-600 ml-0.5 fill-orange-600" />
                </div>
              </div>

              <div className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 text-white text-xs">
                <Calendar className="w-3 h-3" /> {sermon.date}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-[1]" />
              <img
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={
                  Array.isArray(sermon.images)
                    ? sermon.images[0]
                    : sermon.images
                }
                alt={sermon.title}
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-3">
                <h4 className="text-white font-bold whitespace-normal leading-tight">
                  {sermon.title}
                </h4>
                <p className="text-orange-200 text-xs mt-1 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> {sermon.scripture}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIES */}
      <TestimonySection />

      {/* MINISTRY STATS */}
      <section className="max-w-6xl mx-auto px-4 mt-8 mb-12">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-2xl font-bold">{sermons.length}+</p>
            <p className="text-gray-500 text-sm">Sermons</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-gray-500 text-sm">Years in Ministry</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-gray-500 text-sm">Commitment to God</p>
          </div>
        </div>
      </section>
    </LayoutWidget>
  );
}
