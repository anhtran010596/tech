import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/Mask_Group.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const heroList = [
  {
    id: 1,
    image: image1,
    title: "Futebol Fever",
  },
  {
    id: 2,
    image: image1,
    title: "Chicky Run",
  },
  {
    id: 3,
    image: image1,
    title: "Futebol Fever",
  },
  {
    id: 4,
    image: image1,
    title: "Chicky Run",
  },
];

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative overflow-hidden bg-[#03827E] w-full min-h-[420px] md:min-h-[576px] flex justify-center">
      <div className="container heroBanner">
        <Slider {...settings}>
          {heroList.map((item) => (
            <div key={item.id}>
              <div className="relative w-full min-h-[420px] md:min-h-[576px] object-cover">
                <img
                  src={item.image}
                  className="md:object-fill object-none w-full min-h-[420px] md:min-h-[576px]"
                />
                <div className="md:hidden block absolute bottom-5 left-0 w-full">
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-[24px] font-normal text-white">
                      {item.title}
                    </div>
                    <div className="cursor-pointer flex items-center text-sm font-normal text-white mt-3">
                      Game Details
                      <MdOutlineArrowRightAlt size={20} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MultipleItems;
