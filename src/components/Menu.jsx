import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoAppsSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";

export default function Menu() {
  return (
    <div
      className="w-full md:w-[160px] flex-0 basis-[160px]"
      style={{ flex: "0 0 160px" }}
    >
      <ul className="md:block flex justify-between md:border-b-0 border-b border-black/20">
        <li className="relative order-1 md:order-first group flex md:flex-row flex-col md:justify-start justify-center flex-1 items-center text-black/20 cursor-pointer py-5 md:pb-6 md:border-b md:boder-black/20">
          <FaSearch size={20} className="pr-1 group-hover:text-black" />
          <div className="md:text-base text-[10px] group-hover:text-black uppercase md:capitalize font-semibold">
            Search
          </div>
          <div className="hidden md:group-hover:hidden group-hover:block w-full h-[1px] bg-black absolute bottom-0 left-0"></div>
        </li>
        <li className="relative group flex md:flex-row flex-col md:justify-start justify-center items-center flex-1 text-black/20 cursor-pointer py-5 md:py-3">
          <IoMdHome size={25} className="pr-1 group-hover:text-black" />
          <div className="md:text-base text-[10px] group-hover:text-black uppercase md:capitalize font-semibold">
            Home
          </div>
          <div className="hidden md:group-hover:hidden group-hover:block w-full h-[1px] bg-black absolute bottom-0 left-0"></div>
        </li>
        <li className="relative group flex md:flex-row flex-col md:justify-start justify-center items-center flex-1 text-black/20 cursor-pointer py-5 md:py-3">
          <CiViewTimeline size={20} className="pr-1 group-hover:text-black" />
          <div className="md:text-base text-[10px] group-hover:text-black uppercase md:capitalize font-semibold">
            Timeline
          </div>
          <div className="hidden md:group-hover:hidden group-hover:block w-full h-[1px] bg-black absolute bottom-0 left-0"></div>
        </li>
        <li className="relative group flex md:flex-row flex-col md:justify-start justify-center items-center flex-1 text-black/20 cursor-pointer py-5 md:py-3">
          <IoAppsSharp size={20} className="pr-1 group-hover:text-black" />
          <div className="md:text-base text-[10px] group-hover:text-black uppercase md:capitalize font-semibold">
            All Game
          </div>
          <div className="hidden md:group-hover:hidden group-hover:block w-full h-[1px] bg-black absolute bottom-0 left-0"></div>
        </li>
        <li className="relative group order-2 md:hidden flex md:flex-row flex-col md:justify-start justify-center items-center flex-1 text-black/20 cursor-pointer py-5 md:py-3 border-l border-black/20">
          <FaFilter size={20} className="pr-1 group-hover:text-black" />
          <div className="md:text-base text-[10px] group-hover:text-black uppercase md:capitalize font-semibold">
            Filter
          </div>
          <div className="hidden md:group-hover:hidden group-hover:block w-full h-[1px] bg-black absolute bottom-0 left-0"></div>
        </li>
      </ul>
    </div>
  );
}
