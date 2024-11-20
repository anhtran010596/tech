import logo from "../assets/White_logo_default.svg";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="flex justify-center items-center w-full fixed top-0 left-0 bg-gradient-to-t from-black/50 from-7% to-black to-70% z-10">
      <div className="container flex justify-between items-center py-3 md:px-0 px-4">
        <div>
          <img
            src={logo}
            width={108}
            height={64}
            alt="Etech"
            className="block md:w-[108px] md:h-[64px] w-[53px] h-[31px]"
          />
        </div>
        <Navbar />
      </div>
    </header>
  );
}
