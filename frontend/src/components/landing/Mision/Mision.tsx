import { Image } from "./Image";
import { Card } from "./Card";
import { Title } from "../../Title";
export const Mision = () => {
  const misions = [
    {
      src: "/images/mision1.png",
      title: "MAKE YOUR SELF",
      description:
        "Build your identity and find your authentic self. Personalize your profile make every detail reflect",
    },
    {
      src: "/images/mision2.png",
      title: "KNOW PEOPLE",
      description:
        "Discover people who share your interests and values. Find your tribe and create real connections.",
    },
    {
      src: "/images/mision3.png",
      title: "ENJOY AND FUN",
      description:
        "Join exciting activities and experience unforgettable moments. Participate in events and funny.",
    },
  ];
  return (
    <section id="mision" className="p-5">
      <div className="flex flex-col gap-5">
        <Title title="Mision"/>
        <h2 className=" text-xl xl:text-5xl text-balance font-normal">
          Meet people who match your <strong className="font-bold">Vibe</strong>
          , create connections that amplify and thrive.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Image urlImage="/images/5.jpeg" />
          <div className="grid grid-cols-1 xxl:grid-cols-2 place-content-between gap-10 w-auto">
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
