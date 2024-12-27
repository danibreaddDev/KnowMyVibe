type Props = {
  src: string;
  index: number;
};
export const Card = ({ src, index }: Props) => {
  let heigthIm = "96";
  let selfS = "";
  if(index %2===0){
    heigthIm = "64";
    selfS = "place-self-end";
  }
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={`h-${heigthIm} w-full bg-cover bg-center rounded-t-lg ${selfS} border-2 border-x-pink-500 border-t-orange-500`}
    ></div>
  );
};
