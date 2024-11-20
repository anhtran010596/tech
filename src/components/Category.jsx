import { IoMusicalNotes } from "react-icons/io5";

export default function category(props) {
  const { category } = props;
  return (
    <div className="w-full flex justify-center">
      <div className="md:pr-3 max-w-[490px]">
        <div className="w-full bg-black/5 rounded-[28px] p-[20px]">
          <div className="w-full flex justify-between items-stretch gap-5">
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-full flex-1 items-stretch">
                <div className="flex flex-col justify-center h-full bg-[#5C6EFF] px-3 rounded-[10px] overflow-hidden">
                  <div className="text-white">
                    <IoMusicalNotes className="md:w-[24px] w-[19px]" />
                  </div>
                  <div className="text-white font-semicolor xl:text-[21px] text-[18px] py-3">
                    {category.title}
                  </div>
                  <div className="text-white font-semicolor xl:text-[13px] text-xs">
                    {category.description}
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src={category.logo1}
                    className="flex-1 inline-block w-full"
                  />
                </div>
                <div>
                  <img
                    src={category.logo2}
                    className="flex-1 inline-block w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex justify-between">
                <div>
                  <img
                    src={category.logo1}
                    className="flex-1 inline-block w-full"
                  />
                </div>
                <div>
                  <img
                    src={category.logo2}
                    className="flex-1 inline-block w-full"
                  />
                </div>
              </div>
              <div>
                <img src={category.banner} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
