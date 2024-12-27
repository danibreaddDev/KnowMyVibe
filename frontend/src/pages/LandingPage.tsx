import { NavBar } from "../components/landing/NavBar/NavBar";
import { About } from "../components/landing/About/About";
import { Mision } from "../components/landing/Mision/Mision";

export const LandingPage = () => {
  return (
    <>
      <header className="p-5 w-full">
        <NavBar />
      </header>

      <main className="p-5 w-full min-h-screen scroll-smooth">
        <About />
        <Mision/>
      </main>

      <footer></footer>
    </>
  );
};
