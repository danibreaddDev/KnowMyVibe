type Props = {
  src: string;
  title: string;
  description: string;
};
export const Card = ({ src, title, description }: Props) => {
  return (
    <div className="p-2 w-fit grid grid-cols-1 md:grid-cols-2 border-2 border-x-pink-500 border-y-orange-500 rounded-md bg-white">
      <img src={src} alt={src} className="aspect-auto rounded-md self-center" />
      <div className="p-5 flex flex-col">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
