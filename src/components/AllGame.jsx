import Menu from "./Menu";
import HotGame from "./HotGame";
import HotCategory from "./HotCategory";
import { FiPlus } from "react-icons/fi";

export default function AllGame() {
  return (
    <div className="w-full flex justify-center md:border-b border-black/20">
      <div className="container md:flex justify-center md:py-8 gap-4">
        <Menu />
        <div className="w-full md:w-custom-calc-width">
          <HotGame />
          <HotCategory />
          <div className="justify-center mt-10 md:hidden flex">
            <div className="max-w-[490px] w-full h-[50px] rounded-[14px] flex justify-center items-center cursor-pointer border border-black/2 bg-black/2">
              <div className="text-[15px] font-semibold mr-2">Load More</div>
              <div className="text-[15px] font-semibold">
                <FiPlus size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
