type Props = {
  name: string;
  username: string;
  opinion: string;
  rate: number;
};

export const RateCard = ({ name, username, opinion, rate }: Props) => {
  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(
      <svg
        key={i}
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }
  if (rate < 5) {
    stars.push(
     
      <svg
      key={rate}
        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }

  return (
    <div className=" bg-white rounded-lg h-full">
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row justify-between items-center">
          <div className="flex gap-x-3 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="/images/1.png"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <h2 className="text-slate-950 text-xl">{name}</h2>
              <h3 className="text-slate-500 text-lg">{username}</h3>
            </div>
          </div>
          <div className="flex items-center">{stars}</div>
        </div>
        <p className="text-slate-950 font-light">{opinion}</p>
      </div>
    </div>
  );
};
