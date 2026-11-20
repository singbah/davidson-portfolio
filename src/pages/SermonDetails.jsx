import { useState } from "react";
import { ArrowLeft, Play, Calendar, BookOpen, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LayoutWidget from "../components/Layout";

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

export default function SermonDetails() {
  const navigate = useNavigate();
  const sermon = JSON.parse(localStorage.getItem("previousSermon") || "null");

  if (!sermon) {
    return (
      <LayoutWidget>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">No sermon found</h1>
          <p className="text-gray-500 mt-2">
            Please go back and select a sermon again.
          </p>
          <button
            onClick={() => navigate("/sermons")}
            className="mt-6 bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold"
          >
            Back to Sermons
          </button>
        </div>
      </LayoutWidget>
    );
  }

  const allImages = Array.isArray(sermon.images)
    ? sermon.images
    : [sermon.images];
  const [mainImage, setMainImage] = useState(allImages[0]);

  // Thumbnail to show - YouTube auto, Facebook = your uploaded photo
  const thumbnail = getVideoThumbnail(sermon);

  const handleShare = () => {
    const text = `Listen to this sermon: "${sermon.title}" - ${sermon.scripture} by Pastor Davidson S.M. Morris`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <LayoutWidget>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold">{sermon.title}</h1>

        <div className="flex flex-wrap gap-3 mt-3">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {sermon.date}
          </span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> {sermon.scripture}
          </span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
            By Pastor Davidson S.M. Morris
          </span>
        </div>

        {/* VIDEO THUMBNAIL - IMAGE ONLY, NO IFRAME, NEVER BLANK */}
        {/* Click = opens Facebook / YouTube in new tab */}
        <a
          href={sermon.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mt-6 shadow-md bg-gray-200 group"
        >
          <img
            src={thumbnail}
            alt={sermon.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // If YouTube thumbnail fails, fall back to your uploaded photo
              e.currentTarget.src = mainImage;
            }}
          />

          {/* Dark overlay so Play button pops */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          {/* Play Button - Always visible */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
              <Play className="w-8 h-8 text-orange-600 ml-1 fill-orange-600" />
            </div>
            <p className="text-white font-semibold text-sm mt-3 bg-black/50 px-4 py-1.5 rounded-full">
              Click to Watch Video
            </p>
          </div>
        </a>

        {/* THUMBNAILS - If he has multiple photos */}
        {allImages.length > 1 && (
          <div className="flex gap-3 mt-3 overflow-x-auto pb-2 scrollbar-hide">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${sermon.title} ${i + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-28 h-20 rounded-xl shrink-0 cursor-pointer transition object-cover ${
                  mainImage === img
                    ? "ring-2 ring-orange-500 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        )}

        {/* DESCRIPTION */}
        <h2 className="text-xl font-bold mt-8">About This Sermon</h2>
        <p className="text-gray-600 leading-relaxed mt-2 whitespace-pre-line">
          {sermon.description}
        </p>

        {/* SCRIPTURE BOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-6">
          <p className="text-sm font-bold text-amber-800">Key Scripture</p>
          <p className="text-gray-700 mt-1 italic">"{sermon.scripture}"</p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3 mt-8">
          {sermon.videoLink && (
            <a
              href={sermon.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-700 transition shadow"
            >
              <Play className="w-4 h-4 fill-white" /> Watch on Facebook /
              YouTube
            </a>
          )}

          <button
            onClick={handleShare}
            className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            <Share2 className="w-4 h-4" /> Share Sermon
          </button>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/231775390208?text=Hi%20Pastor%20Davidson%2C%20I%20listened%20to%20your%20sermon%20${encodeURIComponent(
                  sermon.title,
                )}%20and%20I%20need%20prayer.`,
                "_blank",
              )
            }
            className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
          >
            Need Prayer?
          </button>
        </div>
      </div>
    </LayoutWidget>
  );
}
