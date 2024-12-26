type iconProps = {
    icon: string;
    title: string;
  };
export default function Icon({icon,title}:iconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 fill-white group-hover:fill-black"
    >
      <title>{title}</title>
      <path d={icon} />
    </svg>
  );
}
