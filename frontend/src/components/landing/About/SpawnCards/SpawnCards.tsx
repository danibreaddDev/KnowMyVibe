import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./Card";
export const SpawnCards = () => {
  const [PositionCards, setPositionCards] = useState(0);

  const cards = ["/images/4.jpeg", "/images/3.jpeg","/images/2.jpeg", "/images/3.jpeg","/images/4.jpeg", "/images/2.jpeg",];
  const changeOrder = () => {
    setPositionCards(
      (prevPositionCards) => (prevPositionCards + 1) % cards.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeOrder();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const reorderedCards = [
    ...cards.slice(PositionCards),
    ...cards.slice(0, PositionCards),
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8">
      {reorderedCards.map((card, index) => (
        <Card key={index} index={index} src={card} />
      ))}
    </div>
  );
};
