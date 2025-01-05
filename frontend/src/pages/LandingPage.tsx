import { NavBar } from "../components/landing/Sections/NavBar/NavBar";
import { About } from "../components/landing/Sections/About/About";
import { Mision } from "../components/landing/Sections/Mision/Mision";
import { Comunity } from "../components/landing/Sections/Comunity/Comunity";
import { FaQs } from "../components/landing/Sections/FaQs/FaQs";
import { Footer } from "../components/landing/Sections/Footer/Footer";

export const LandingPage = () => {
  return (
    <>
      <header className="p-5 w-full">
        <NavBar />
      </header>

      <main className="p-5 lg:p-20 min-h-screen scroll-smooth flex flex-col gap-y-20">
        <About />
        <Mision />
        <Comunity />
        <FaQs />

      </main>

      <Footer />
    </>
  );
};
