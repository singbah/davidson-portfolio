import { useState } from "react";
import LayoutWidget from "../components/Layout";
import {
  Search,
  Play,
  Calendar,
  BookOpen,
  ArrowRight,
  Heart,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sermons } from "../utils";

// Helper: Get thumbnail image from video link
// YouTube = auto thumbnail, Facebook = use uploaded photo
function getVideoThumbnail(sermon) {
  const url = sermon.videoLink || "";

  // YouTube - https://www.youtube.com/watch?v=VIDEO_ID
  if (url.includes("youtube.com/watch")) {
    try {
      const id = new URL(url).searchParams.get("v");
      if (id) return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    } catch {}
  }

  // YouTube short - https://youtu.be/VIDEO_ID
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }

  // Facebook or anything else - use the photo you uploaded
  // This is why you MUST upload a screenshot / photo for Facebook sermons
  if (Array.isArray(sermon.images)) return sermon.images[0];
  return sermon.images;
}

export default function SermonsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Faith", "Prayer", "Family", "Healing", "Hope"];

  // Filter logic
  const filtered = sermons.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      sermon.category === selectedCategory ||
      sermon.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      sermon.description.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const handleSermonDetails = (sermon) => {
    localStorage.setItem("previousSermon", JSON.stringify(sermon));
    navigate("/sermon-details");
  };

  // Latest sermon = first in array
  const featured = sermons[0];

  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-orange-600 font-bold tracking-widest text-sm">
            SERMONS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-1">
            Watch & Grow In Faith
          </h1>
          <p className="text-gray-500 mt-2">
            Bible-based messages from Pastor Davidson S.M. Morris. Click any
            sermon to watch on Facebook or YouTube.
          </p>
        </div>

        {/* FEATURED SERMON - Latest */}
        {featured && searchTerm === "" && selectedCategory === "All" && (
          <div
            onClick={() => handleSermonDetails(featured)}
            className="relative rounded-3xl overflow-hidden mt-8 cursor-pointer group bg-gray-200 shadow-md"
          >
            <img
              src={getVideoThumbnail(featured)}
              alt={featured.title}
              className="w-full h-[280px] md:h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = Array.isArray(featured.images)
                  ? featured.images[0]
                  : featured.images;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                <Play className="w-8 h-8 text-orange-600 ml-1 fill-orange-600" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-600 text-white">
                LATEST SERMON
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-bold mt-3 leading-tight">
                {featured.title}
              </h2>
              <p className="text-gray-300 text-sm mt-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {featured.date} •{" "}
                <BookOpen className="w-4 h-4" /> {featured.scripture}
              </p>
            </div>
          </div>
        )}

        {/* SEARCH + FILTERS */}
        <div className="flex flex-col md:flex-row gap-3 mt-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search sermons..."
              className="w-full border border-gray-200 rounded-full pl-11 pr-4 py-3 outline-none focus:border-orange-500 text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white border-orange-600"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-gray-500 mt-3">No sermons found.</p>
            <p className="text-gray-400 text-sm">Try a different search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {filtered.map((sermon, i) => (
              <div
                key={i}
                onClick={() => handleSermonDetails(sermon)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition group"
              >
                {/* THUMBNAIL - IMAGE ONLY, NO IFRAME, NEVER BLANK */}
                <div className="relative overflow-hidden bg-gray-200">
                  <img
                    src={getVideoThumbnail(sermon)}
                    alt={sermon.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // If YouTube thumbnail fails, show uploaded photo
                      e.currentTarget.src = Array.isArray(sermon.images)
                        ? sermon.images[0]
                        : sermon.images;
                    }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

                  {/* Play Button - Always visible */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play className="w-6 h-6 text-orange-600 ml-1 fill-orange-600" />
                    </div>
                  </div>

                  {/* Date Badge */}
                  <span className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full bg-orange-600 text-white">
                    {sermon.date}
                  </span>
                </div>

                {/* TEXT */}
                <div className="p-5">
                  <h3 className="font-bold text-lg leading-snug line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                    {sermon.scripture}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-2">
                    {sermon.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      Pastor Davidson S.M. Morris
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-orange-600">
                      Watch <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NEED PRAYER STRIP */}
        <div className="bg-black text-white rounded-3xl p-6 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
              Touched By A Sermon?
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Don't keep it to yourself. Send Pastor a message and let's pray
              together.
            </p>
          </div>
          <a
            href="https://wa.me/231775390208?text=Hi%20Pastor%20Davidson%2C%20I%20watched%20your%20sermon%20and%20I%20need%20prayer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-700 shrink-0"
          >
            Request Prayer
          </a>
        </div>
      </div>
    </LayoutWidget>
  );
}
