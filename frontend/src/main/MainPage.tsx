import HeaderComponent from "./components/HeaderComponent";
import TitleComponent from "./components/TitleComponent";

export const MainPage = () => {
  return (
    <>
      <header className="w-full">
        <HeaderComponent />
      </header>
      <main className="p-2 md:p-5 w-full min-h-screen flex flex-col">
        <TitleComponent />
      </main>
      <footer></footer>
    </>
  );
};
