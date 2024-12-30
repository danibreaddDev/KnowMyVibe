import { Image } from "./Image";
import { Card } from "./Card";
export const Mision = () => {
  const misions = [
    {
      src: "/images/mision1.png",
      title: "Mision 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
    {
      src: "/images/mision2.png",
      title: "Mision 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
    {
      src: "/images/mision3.png",
      title: "Mision 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
  ];
  return (
    <section
      id="mision"
      className="p-5 "
    >
      <div className="flex flex-col gap-y-10">
        <h1 className=" text-xl xl:text-6xl text-balance font-normal">
          Meet people who match your <strong className="font-bold">Vibe</strong>
          , create connections that amplify and thrive.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Image urlImage="/images/5.jpeg"/>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {misions.map((card, index) => (
              <Card
                key={index}
                src={card.src}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
