import { NavBar } from "../components/landing/NavBar/NavBar";
import { About } from "../components/landing/About/About";
import { Mision } from "../components/landing/Mision/Mision";
import { Comunity } from "../components/landing/Comunity/Comunity";
import { FaQs } from "../components/landing/FaQs/FaQs";

export const LandingPage = () => {
  return (
    <>
      <header className="p-5 w-full">
        <NavBar />
      </header>

      <main className="p-5 lg:p-20 min-h-screen scroll-smooth flex flex-col gap-y-20">
        <About />
        <Mision/>
        <Comunity/>
        <FaQs/>
      </main>

      <footer></footer>
    </>
  );
};
