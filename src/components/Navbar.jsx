import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { AiOutlineMenu } from "react-icons/ai";
import {FaRegBell} from "react-icons/fa";
import {PiMagnifyingGlassLight} from "react-icons/pi"
import { MdMic } from "react-icons/md";
import {BiVideoPlus} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10">
      <div className="text-yt-white p-2 w-10 text-center hover:bg-yt-light-black rounded-full">
        <AiOutlineMenu size={20} />
      </div>

      <div className="py-5 w-32 pr-3">
        <Link to="/">
          <img src={logo} alt="logo" className="object-contain" />
        </Link>
      </div>

      <div className="h-10 flex flex-row items-center flex-1 ml-40">
        <div className="bg-yt-black rounded-3xl w-[593px] h-10 border border-yt-light-black flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-yt-black h-6 ml-6 text-yt-white align-middle text-start focus:outline"
          />
          <button className="w-16 h-10 px-2 py-0.5  border-l-2 bg-yt-light-black rounded-r-3xl">
          <PiMagnifyingGlassLight size={22} className="text-yt-white  inline-block text-center font-thin"/>
          </button>
        </div>
        <div className="text-yt-white bg-yt-light w-10 h-10 items-center flex justify-center hover:bg-yt-light-black rounded-full ml-4">
          <MdMic className="text-center" size={23} />
        </div>
      </div>

      <div className="flex items-center justify-center">
          <div className="flex flex-row items-center">
            <div className="mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <BiVideoPlus size={25} className="text-center text-yt-white" />
            </div>
            <div className="mx-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <FaRegBell size={20} className="text-center text-yt-white"/>
            </div>
            <div>
              <button className="bg-yt-black text-yt-white px-4 py-1 border-solid border-2 border-yt-blue rounded-3xl">Sign In</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
