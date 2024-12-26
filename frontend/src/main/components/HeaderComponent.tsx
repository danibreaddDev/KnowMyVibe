import applogo from "../../assets/logo.svg";

export default function HeaderComponent() {
  return (
    <div className="p-5 flex justify-between items-center">
      <a href="">
        <img src={applogo} alt="" className="px-4" />
      </a>
      <div className="flex gap-16 text-sm md:text-lg font-medium">
        <a href="#" className="text-slate-500 hover:text-gray-900">
          Mision
        </a>
        <a href="#" className="text-slate-500 hover:text-gray-900">
          Community
        </a>
        <a href="#" className="text-slate-500 hover:text-gray-900">
          FaQs
        </a>
        <a href="#" className="text-slate-500 hover:text-gray-900">
          Contact
        </a>
      </div>
      <div className="group flex gap-2 py-1 px-4  text-white rounded bg-gradient-to-r from-pink-500 to-orange-500 border border-l-pink-500 border-t-pink-500 border-r-orange-500 border-b-orange-500 hover:bg-none hover:text-black transition-colors duration-700">
        <a href="" className="font-medium">
          login
        </a>
      </div>
    </div>
  );
}
