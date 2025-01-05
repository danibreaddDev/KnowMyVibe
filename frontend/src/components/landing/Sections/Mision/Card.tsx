type Props = {
  src: string;
  title: string;
  description: string;
};
export const Card = ({ src, title, description }: Props) => {
  return (
    <div className="p-2 h-fit grid grid-cols-1 lg:grid-cols-2 border rounded-lg">
      <img src={src} alt={src} className=" rounded-lg w-32 place-self-center" />
      <div className="p-5 flex flex-col">
        <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text">{title}</h2>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
};
