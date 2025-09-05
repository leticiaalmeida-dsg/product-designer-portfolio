import { HamburgerMenu as Navigation } from "./components/Navigation";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SelectedWork />
      <About />
      <Footer />
    </div>
  );
}
