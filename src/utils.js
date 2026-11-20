import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import sermon from "../static/photos/davidson_pic.jpg";
import sermon2 from "../static/photos/sermon2.png";

const sermons = [
  {
    title: "Faith in Hard Times",
    date: "Nov 16, 2026",
    scripture: "Hebrews 11:1",
    category: "Faith",
    description: "How to keep faith when life is hard...",
    images: [sermon], // <-- Screenshot for Facebook, backup for YouTube
    videoLink:
      "https://web.facebook.com/reel/1541472217819359/?s=fb_shorts_profile&stack_idx=0",
    // or: videoLink: "https://www.youtube.com/watch?v=abc123",
  },
  {
    title: "Faith in Hard Times",
    date: "Nov 16, 2026",
    scripture: "Hebrews 11:1",
    category: "worship",
    description: "How to keep faith when life is hard...",
    images: [sermon2], // <-- Screenshot for Facebook, backup for YouTube
    videoLink:
      "https://web.facebook.com/reel/1316773496457042/?s=fb_shorts_profile&stack_idx=0",
    // or: videoLink: "https://www.youtube.com/watch?v=abc123",
  },
];

const socialLinks = [
  {
    name: "facebook",
    link: "https://web.facebook.com/me/",
    logo: FaFacebook,
    color: "text-blue-500",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/231880868634?text=Hi%20John%2C%20I%20want%20to%20hire%20you%20for%20a%20project",
    logo: FaWhatsapp,
    color: "text-green-500",
  },

  {
    name: "tiktok",
    link: "www.tiktok.com/@johnsingbah",
    logo: FaTiktok,
    color: "",
  },
  {
    name: "youtube",
    link: "www.youtube.com/@johnsingbah",
    logo: FaYoutube,
    color: "text-red-500",
  },

  {
    name: "email",
    link: "mailto:singbahjohn@email.com",
    logo: Mail,
    color: "text-red-500",
  },
  {
    name: "phone",
    link: "tel:+231880868634",
    logo: Phone,
    color: "text-green-500",
  },
];

const testimonials = [
  {
    name: "Sister Grace",
    role: "Church Member, Monrovia",
    text: "After Pastor prayed for me, God answered. I am healed and I give God all the glory.",
    image: "/testimonies/grace.jpg",
    stars: 5,
  },
  {
    name: "Brother Emmanuel",
    role: "Church Member",
    text: "I was lost, but through Pastor Davidson's preaching I gave my life to Christ.",
    image: "/testimonies/emmanuel.jpg",
    stars: 5,
  },
];

const galleryImages = [
  {
    src: "/gallery/sunday-1.jpg",
    title: "Sunday Worship - Praise Team",
    category: "Church Service",
  },
  {
    src: "/gallery/sunday-2.jpg",
    title: "Pastor Davidson Preaching",
    category: "Church Service",
  },
  {
    src: "/gallery/outreach-1.jpg",
    title: "Feeding The Community",
    category: "Outreach",
  },
  {
    src: "/gallery/fellowship-1.jpg",
    title: "Fellowship After Service",
    category: "Fellowship",
  },
  {
    src: "/gallery/event-1.jpg",
    title: "Church Anniversary Celebration",
    category: "Events",
  },
];

export { sermons, socialLinks, testimonials, galleryImages };
