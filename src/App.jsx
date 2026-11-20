import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SermonDetails from "./pages/SermonDetails";
import Gallery from "./pages/Gallery";
import SermonsPage from "./pages/Sermon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sermons" element={<SermonsPage />} />
      <Route path="/sermon-details" element={<SermonDetails />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
