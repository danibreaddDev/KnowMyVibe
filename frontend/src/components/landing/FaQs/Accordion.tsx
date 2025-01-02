import { useState } from "react";
type item = {
  title: string;
  content: string;
};
type Props = {
  items: item[];
};
export const Accordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleOpen = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="w-full self-center"
    >
      {items.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className="flex items-center gap-x-3  p-5"
              data-accordion-target="#accordion-collapse-body-1"
              onClick={() => toggleOpen(index)}
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 fill-pink-500"
                viewBox="0 0 24 24"
              >
                <path d="M14 7V5h8v2zm0 4V9h8v2zm0 4v-2h8v2zm-6-1q-1.25 0-2.125-.875T5 11t.875-2.125T8 8t2.125.875T11 11t-.875 2.125T8 14m-6 6v-1.9q0-.525.25-1t.7-.75q1.125-.675 2.388-1.012T8 15t2.663.338t2.387 1.012q.45.275.7.75t.25 1V20z" />
              </svg>
              <span className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text">
                {item.title}
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0 fill-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${activeIndex === index ? "flex" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 w-full ">
              <p className="mb-2 text-slate-500 font-light">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
