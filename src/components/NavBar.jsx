import { Home, ImageIcon, User, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../static/photos/logo.jpg";

const taps = [
  { name: "Home", icon: Home, link: "/" },
  { name: "About", icon: User, link: "/about" },
  { name: "Gallery", icon: ImageIcon, link: "/gallery" },
  { name: "Sermons", icon: BookOpen, link: "/sermons" },
  { name: "Contact", icon: Mail, link: "/contact" },
];

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTap, setActiveTap] = useState(
    localStorage.getItem("currentTap") || "/",
  );

  const swapActiveTap = (link) => {
    localStorage.setItem("currentTap", link);
    setActiveTap(link);
    navigate(link);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur shadow-md">
      <div className="max-w-6xl mx-auto flex items-center gap-3 px-3 py-3">
        {/* LOGO - RESERVED SPACE - Pastor will insert his logo here */}
        <button
          onClick={() => swapActiveTap("/")}
          className="flex items-center gap-2 shrink-0"
        >
          {/* Logo image - put file at public/logo.png */}
          <img
            src={logo}
            alt="Pastor Davidson SM. Morris Logo"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover bg-white border-2 border-orange-500"
            onError={(e) => {
              // If logo not yet added, show placeholder letter
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          {/* Fallback placeholder - shows until logo is added */}
          <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-orange-600 text-white font-bold text-lg hidden items-center justify-center border-2 border-white/20">
            D
          </span>

          <span className="text-white font-bold text-lg tracking-wide leading-none text-left hidden sm:block">
            Pastor Davidson
            <span className="block text-[11px] font-medium text-orange-400 tracking-widest">
              SM. MORRIS
            </span>
          </span>
        </button>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <ul className="flex items-center gap-2 w-max">
            {taps.map((item) => {
              const isActive = location.pathname === item.link;
              const Icon = item.icon;
              return (
                <li key={item.link} className="shrink-0">
                  <button
                    onClick={() => swapActiveTap(item.link)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" /> {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
}
