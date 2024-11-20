import { useRef } from "react";
import Slider from "react-slick";
import hiphopPanda from "../assets/hiphopPanda.png";
import blackJack from "../assets/blackJack.png";
import iconTala from "../assets/app_icon_small@tala.png";
import iconFarm from "../assets/app_icon_small@farm.png";
import iconGhostMoney from "../assets/app_icon_small@ghostMoney.png";
import iconReroll from "../assets/app_icon_small@reroll.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Category from "./Category";

const categoryList = [
  {
    id: 1,
    banner: hiphopPanda,
    logo1: iconGhostMoney,
    logo2: iconReroll,
    logo3: iconFarm,
    logo4: iconTala,
    title: "Music",
    description:
      "Music makes every thingbetter, and these gameswill grove to it!",
  },
  {
    id: 2,
    banner: blackJack,
    logo1: iconGhostMoney,
    logo2: iconReroll,
    logo3: iconFarm,
    logo4: iconTala,
    title: "Table Games",
    description: "The classic table gamesfor the gentlemen and ladies.",
  },
  {
    id: 3,
    banner: hiphopPanda,
    logo1: iconGhostMoney,
    logo2: iconReroll,
    logo3: iconFarm,
    logo4: iconTala,
    title: "Mahjong ways",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine gam",
  },
  {
    id: 4,
    banner: blackJack,
    logo1: iconGhostMoney,
    logo2: iconReroll,
    logo3: iconFarm,
    logo4: iconTala,
    title: "Wild Bandito",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
];

export default function HotCategory() {
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
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
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
    <div className="mt-20">
      <div className="flex items-center justify-between px-3 md:px-0">
        <div className="md:text-[28px] text-lg font-semibold">
          Hottest Category
        </div>
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
      </div>
      <div className="w-full overflow-hidden mt-4">
        <div className="px-6 md:px-0">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {categoryList.map((category) => (
              <Category category={category} key={category.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
