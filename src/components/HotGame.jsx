import { useRef } from "react";
import Slider from "react-slick";
import wildBandito from "../assets/WildBandito.png";
import iconWildBandito from "../assets/app_icon_small@wildBandito.png";
import iconMathJongWays from "../assets/app_icon_small@mahjongWays.png";
import mathjongWays from "../assets/MathjongWays.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Game from "./Game";

const gameList = [
  {
    id: 1,
    banner: wildBandito,
    logo: iconWildBandito,
    title: "Mahjong ways",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine gam",
  },
  {
    id: 2,
    banner: mathjongWays,
    logo: iconMathJongWays,
    title: "Wild Bandito",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
  {
    id: 3,
    banner: wildBandito,
    logo: iconWildBandito,
    title: "Mahjong ways",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine gam",
  },
  {
    id: 4,
    banner: mathjongWays,
    logo: iconMathJongWays,
    title: "Wild Bandito",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
];

export default function HotGame() {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="md:mt-0 mt-10">
      <div className="flex items-center justify-between px-3 md:px-0">
        <div className="md:text-[28px] text-lg font-semibold">Hot Game</div>
        <div className="md:flex hidden">
          <button
            className="cursor-pointer text-black/50 hover:text-black disabled:text-black/10"
            onClick={next}
          >
            <RiArrowLeftSLine size={30} />
          </button>
          <button
            className="cursor-pointer text-black/50 hover:text-black disabled:text-black/10"
            onClick={previous}
          >
            <RiArrowRightSLine size={30} />
          </button>
        </div>
        <div className="md:hidden block">
          <select
            name="cars"
            id="cars"
            className="border border-black/20 text-[12px] font-semibold px-2 py-1"
          >
            <option value="volvo">Release Date</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className="w-full overflow-hidden mt-4">
        <div className="px-6 md:px-0">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {gameList.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
