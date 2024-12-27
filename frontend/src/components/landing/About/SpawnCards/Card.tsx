type Props = {
  src: string;
  index: number;
};
export const Card = ({ src, index }: Props) => {
  let heigthIm = "h-96";
  let selfS = "";
  if(index %2===0){
    heigthIm = "h-64";
    selfS = "place-self-end";
  }
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={`${heigthIm} w-full bg-cover bg-center rounded-t-lg ${selfS} border-2 border-x-pink-500 border-t-orange-500`}
    ></div>
  );
};
