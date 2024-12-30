import { Description } from "./Description";
export const Mision = () => {
  return (
    <section id="mision" className="p-5 bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="flex flex-col gap-y-10">
        <h1 className="xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-white to-orange-500">Mision</h1>
        <div className="grid grid-cols-2">
          <img src="/images/mision1.png" alt="" className="place-self-center"/>
          <Description/>
        </div>
      </div>
    </section>
  );
};
