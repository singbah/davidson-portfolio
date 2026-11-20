import { socialLinks } from "../utils";

export default function FooterBar() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1. Pastor */}
        <div>
          <h2 className="text-2xl font-bold">Davidson SM. Morris</h2>
          <p className="text-gray-400 text-sm mt-1">
            Minister of the Gospel | Monrovia, Liberia
          </p>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Preaching the Word of God, teaching truth, and serving the community
            with love, prayer, and faith.
          </p>

          {/* Socials - icons only */}
          <div className="flex gap-3 mt-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition"
              >
                <link.logo className={`text-xl ${link.color}`} />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Ministry Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Ministry</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a href="/sermons" className="hover:text-white">
                {" "}
                Sermons{" "}
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-white">
                {" "}
                Gallery{" "}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                {" "}
                About Pastor{" "}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                {" "}
                Contact / Prayer{" "}
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Get In Touch / Prayer */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Need prayer, counseling, or want to invite Pastor to preach? Reach
            out.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mt-4">
            <li>Monrovia, Liberia</li>
            <li>davidsonsmmorris@gmail.com</li>
            <li>+231 775 390 208</li>
          </ul>
          <a
            href="https://wa.me/231775390208?text=Hi%20Pastor%20Davidson%2C%20I%20need%20prayer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Request Prayer
          </a>
          <p className="flex items-center gap-2 text-sm text-orange-400 mt-4">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Available for Prayer & Ministry
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pastor Davidson SM. Morris. All Rights
        Reserved.
      </div>
    </footer>
  );
}
