export default function Game(props) {
  const { game } = props;
  return (
    <div className="w-full flex justify-center">
      <div className="md:pr-3 max-w-[490px] md:rounded-none rounded-[5px] overflow-hidden bg-[#C48F03] md:bg-inherit">
        <div>
          <img src={game.banner} className="w-full" />
        </div>
        <div className="md:mt-4 p-4 md:p-0 md:bg-inherit bg-[#C48F03]">
          <div className="w-full flex justify-between items-center">
            <img src={game.logo} className="md:w-[90px] w-[60px]" />
            <div className="flex justify-between items-center ml-2">
              <div>
                <div className="text-[19px] font-semibold mb-3 md:text-black text-white">
                  {game.title}
                </div>
                <div className="text-[14px] font-normal text-ellipsis overflow-hidden w-full md:text-black/50 text-white">
                  {game.description}
                </div>
              </div>
            </div>
            <button className="hidden md:block border-collapse border-black/20 border py-[7px] px-[20px] ml-2 hover:border-black rounded-[3px]">
              View
            </button>
          </div>
          <div className="flex md:hidden justify-between mt-4">
            <div>
              <div className="text-base text-white font-normal">Medium</div>
              <div className="text-xs text-white  font-normal">Volatily</div>
            </div>
            <div>
              <div className="text-base text-white font-normal">95.01%</div>
              <div className="text-xs text-white  font-normal">RTP</div>
            </div>
            <div>
              <div className="text-base text-white font-normal">x5000</div>
              <div className="text-xs text-white  font-normal">Maximum Win</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
