import { RateCard } from "./RateCard";
import { Title } from "../../Title";
import testimonial from "../../../data/testimonials.json";
export const Comunity = () => {
  return (
    <section
      className="p-5  bg-gradient-to-r from-pink-50 to-orange-400 w-full"
      id="comunity"
    >
      <div className="flex flex-col gap-5">
        <Title title="Comunity" />
        <h2 className="text-6xl font-bold">Public cheers for us!</h2>
        <h3 className="font-light">Find out how our users are spreading the word!</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
          {testimonial.map((opinion, index) => (
            <RateCard
              key={index}
              name={opinion.name}
              username={opinion.username}
              opinion={opinion.testimonial}
              rate={opinion.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
