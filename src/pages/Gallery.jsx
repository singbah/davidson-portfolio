import { useState } from "react";
import LayoutWidget from "../components/Layout";
import { X, Camera, Church, Users, Heart } from "lucide-react";
import { galleryImages } from "../utils";

const filters = ["All", "Church Service", "Outreach", "Fellowship", "Events"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-orange-600 font-bold tracking-widest text-sm flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" /> GALLERY
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Moments of Faith
          </h1>
          <p className="text-gray-500 mt-2">
            Pictures from church services, outreach, and fellowship with our
            community in Monrovia.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                activeFilter === f
                  ? "bg-orange-600 text-white border-orange-600"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <Church className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-gray-500 mt-3">
              No photos in this category yet.
            </p>
            <p className="text-gray-400 text-sm">
              Check back after next service.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
            {filtered.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold text-sm leading-tight">
                    {img.title}
                  </p>
                  <p className="text-orange-200 text-xs">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* INFO STRIP */}
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6 mt-10 grid md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Church className="w-6 h-6 text-orange-600" />
            <p className="font-bold mt-2">Sunday 9:00 AM</p>
            <p className="text-gray-500 text-sm">Join us for worship</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-6 h-6 text-orange-600" />
            <p className="font-bold mt-2">All Are Welcome</p>
            <p className="text-gray-500 text-sm">Bring your family & friends</p>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="w-6 h-6 text-orange-600" />
            <p className="font-bold mt-2">Share Your Moment</p>
            <p className="text-gray-500 text-sm">
              Send photos to Pastor on WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* LIGHTBOX - Click to enlarge */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-bold">{selectedImage.title}</p>
              <p className="text-gray-400 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </LayoutWidget>
  );
}
