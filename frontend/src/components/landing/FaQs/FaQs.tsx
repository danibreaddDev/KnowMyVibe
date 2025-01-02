import { Title } from "../../Title";
import { Accordion } from "./Accordion";
import faqs from "../../../data/faqs.json"

export const FaQs = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col">
        <Title title="Frequently Asked Questions" />

        <Accordion items={faqs} />
      </div>
    </section>
  );
};
