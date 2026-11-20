import FooterBar from "./Footer";
import NavigationBar from "./NavBar";

export default function LayoutWidget({ children }) {
  return (
    <main className="flex flex-col bg-gray-100 relative min-h-screen">
      <NavigationBar />
      <div className="flex-1">{children}</div>
      <FooterBar />
    </main>
  );
}
