import logo from "../assets/White_logo.png";
import { CiTwitter } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import Accordion from "./Accordion";
const webMapList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Games",
  },
  {
    id: 3,
    name: "News",
  },
  {
    id: 4,
    name: "Math",
  },
  {
    id: 5,
    name: "Company",
  },
  {
    id: 6,
    name: "Events",
  },
  {
    id: 7,
    name: "Partners",
  },
];

const aboutUsList = [
  {
    id: 1,
    name: "Licensing",
  },
  {
    id: 2,
    name: "Certification",
  },
  {
    id: 3,
    name: "Responseble Gaming",
  },
  {
    id: 4,
    name: "Ehibitions",
  },
  {
    id: 5,
    name: "Coppyright Protection",
  },
  {
    id: 6,
    name: "Privacy Policy",
  },
];

const eventsList = [
  {
    id: 1,
    name: "PG ICE 2017",
  },
  {
    id: 2,
    name: "PG ICE 2018",
  },
  {
    id: 3,
    name: "PG ICE 2019",
  },
  {
    id: 4,
    name: "About Ice",
  },
];

const ourPartnersList = [
  {
    id: 1,
    name: "Relax Gaming",
  },
  {
    id: 2,
    name: "Leader Gaming",
  },
];

const footerMenu = [
  {
    id: 1,
    title: "WEB Map",
    list: webMapList,
  },
  {
    id: 2,
    title: "About us",
    list: aboutUsList,
  },
  {
    id: 3,
    title: "Events",
    list: eventsList,
  },
  {
    id: 4,
    title: "Our partners",
    list: ourPartnersList,
  },
];

export default function Footer() {
  return (
    <div className="flex justify-center items-center">
      <div className="container md:py-10 py-4 md:px-0 px-4">
        <div className="block md:hidden mb-10">
          {footerMenu.map((item) => (
            <Accordion key={item.title} data={item} />
          ))}
        </div>
        <div className="flex justify-between md:mb-5">
          <div>
            <div className="hidden md:block">
              <img src={logo} />
            </div>
            <div className="flex md:block md:mt-4">
              <div className="text-black/20 font-semibold text-sm">
                Valletta Buildings, South Street,
              </div>
              <div className="text-black/20 font-semibold text-sm">
                Valletta - VLT 1103 Malta
              </div>
            </div>
            <div className="text-black/20 font-semibold text-sm md:hidden block mt-5">
              COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
            </div>
            <div>
              <div className="flex mt-5">
                <div className="text-[#1EA1F1] mr-3" size={20}>
                  <CiTwitter />
                </div>
                <div className="text-[#FF2500] mr-3" size={20}>
                  <SlSocialYoutube />
                </div>
                <div className="text-[#1EA1F1]" size={20}>
                  <LuLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:gap-20 gap-10 hidden md:flex">
            {footerMenu.map((item) => (
              <div key={item.title}>
                <div className="text-sm font-semibold">{item.title}</div>
                <ul className="flex flex-col mt-2">
                  {item.list.map((list) => (
                    <li
                      key={list.id}
                      className="text-xs font-normal mt-1 cursor-pointer text-black/50 hover:text-black"
                    >
                      {list.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-2 border-t-black/20 py-5 md:block hidden">
          <div className="text-black/20 font-semibold text-sm">
            COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </div>
  );
}
