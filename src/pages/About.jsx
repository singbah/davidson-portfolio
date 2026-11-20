import LayoutWidget from "../components/Layout";
import {
  MapPin,
  Mail,
  Phone,
  BookOpen,
  Users,
  ArrowRight,
  Church,
  Mic,
  HandHeart,
} from "lucide-react";
import profilePic from "../../static/photos/davidson_profile.jpg";

// What Pastor does - NOT dev services
const ministries = [
  {
    icon: Mic,
    title: "Preaching & Teaching",
    text: "Clear, Bible-based sermons that help you understand God's Word and apply it to daily life.",
  },
  {
    icon: HandHeart,
    title: "Prayer & Counseling",
    text: "One-on-one prayer, guidance and encouragement for families, marriages, and anyone going through hard times.",
  },
  {
    icon: Users,
    title: "Community & Outreach",
    text: "Visiting the sick, helping the needy, and building a loving church family here in Monrovia and beyond.",
  },
];

// Pastor's journey - NOT coding journey
const journey = [
  {
    year: "Called",
    title: "Called By God",
    text: "God called me to serve. I answered with a willing heart to preach the Gospel and help people find hope in Christ.",
  },
  {
    year: "Learning",
    title: "Studying The Word",
    text: "Spent years studying the Bible, learning to teach, and growing in faith, prayer, and leadership.",
  },
  {
    year: "Serving",
    title: "Serving The Church",
    text: "Began preaching, teaching Sunday School, and serving families in Monrovia - in good times and hard times.",
  },
  {
    year: "Now",
    title: "Pastor & Teacher",
    text: "Today I serve as Minister of the Gospel - preaching, teaching, praying, and walking with people in their faith journey.",
  },
];

// What he believes / teaches - replaces Skills bars
const beliefs = [
  { name: "Faith", verse: "Hebrews 11:1" },
  { name: "Prayer", verse: "Matthew 6:9" },
  { name: "Love", verse: "1 Corinthians 13:13" },
  { name: "Grace", verse: "Ephesians 2:8" },
  { name: "Hope", verse: "Romans 15:13" },
  { name: "Truth", verse: "John 8:32" },
];

export default function AboutPage() {
  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Pastor Davidson S.M. Morris"
              className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] object-cover shadow-xl"
            />
          </div>
          <div>
            <p className="text-orange-600 font-bold tracking-widest text-sm">
              ABOUT PASTOR
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Hi, I'm Pastor Davidson SM. Morris
            </h1>
            <p className="text-gray-500 mt-1 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Monrovia, Liberia
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              I'm a Minister of the Gospel and Teacher from Liberia. My calling
              is simple - to share the love of Jesus, teach God's Word clearly,
              and help people grow in faith.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Whether you are searching for God, going through a hard season, or
              you just need someone to pray with you - you are welcome here.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://wa.me/231880868634?text=Hi%20Pastor%20Davidson%2C%20I%20need%20prayer"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-orange-700"
              >
                Request Prayer
              </a>
              <a
                href="/sermons"
                className="border border-gray-300 px-5 py-2.5 rounded-full font-semibold flex items-center gap-1 hover:bg-gray-100"
              >
                Watch Sermons <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-6 mt-6 text-sm">
              <div>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-gray-500">Years in Ministry</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100+</p>
                <p className="text-gray-500">Sermons Preached</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-gray-500">Mission: Souls</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT HE DOES */}
        <h2 className="text-2xl md:text-3xl font-bold mt-16">
          How I Can Serve You
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-5">
          {ministries.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm"
              >
                <div className="w-11 h-11 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold mt-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* BELIEFS + JOURNEY */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* BELIEFS - replaces Skills % bars */}
          <div>
            <h2 className="text-2xl font-bold">What I Stand For</h2>
            <div className="grid grid-cols-2 gap-3 mt-5">
              {beliefs.map((b) => (
                <div
                  key={b.name}
                  className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3"
                >
                  <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold">{b.name}</p>
                    <p className="text-gray-500 text-xs">{b.verse}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-600 text-white rounded-3xl p-5 mt-8">
              <h3 className="font-bold">Need prayer or counseling?</h3>
              <p className="text-orange-100 text-sm mt-1">
                Don't carry it alone. Send me a message and let's pray together.
              </p>
              <a
                href="https://wa.me/231775390208?text=Hi%20Pastor%20Davidson%2C%20I%20need%20prayer"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-orange-700 font-semibold px-4 py-2 rounded-full text-sm mt-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* JOURNEY */}
          <div>
            <h2 className="text-2xl font-bold">My Calling Journey</h2>
            <div className="mt-5 space-y-0">
              {journey.map((j, i) => (
                <div key={i} className="flex gap-4 pb-6 relative">
                  {i !== journey.length - 1 && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gray-200" />
                  )}
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center shrink-0 z-10">
                    •
                  </div>
                  <div>
                    <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      {j.year}
                    </span>
                    <h3 className="font-bold mt-2">{j.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1">
                      {j.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="bg-black text-white rounded-3xl p-6 md:p-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Church className="w-6 h-6 text-orange-500" /> Visit Us This
              Sunday
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Sunday Service 9:00 AM | Bible Study Wednesday 5:30 PM | Monrovia,
              Liberia
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> davidsonsmmorris@email.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +231 775 390 208
            </span>
          </div>
        </div>
      </div>
    </LayoutWidget>
  );
}
