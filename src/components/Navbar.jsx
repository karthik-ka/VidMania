import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context/contextAPi";
import  logo  from "../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import {FaRegBell} from "react-icons/fa";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { MdMic } from "react-icons/md";
import {BiVideoPlus} from "react-icons/bi"
const Navbar = () => {
  const { open, setOpen } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    // Nav left section
    <div className="fixed z-50 flex h-14 w-full items-center justify-between bg-yt-black pl-4 pr-5">
      <div className="w-10 rounded-full p-2 text-center text-yt-white hover:bg-yt-light-black">
        <AiOutlineMenu size={20} onClick={() => setOpen(!open)} />
      </div>

      <div className="ml-[-2rem] md:ml-1">
        <Link to="/">
          <img src={logo} alt="logo" className="w-40 md:w-64"  />
        </Link>
      </div>

      {/* Nav middle section  */}

      <div className="ml-30 md:ml-40 flex h-10 flex-1 flex-row items-center">
        <form
          onSubmit={handleSubmit}
          className="flex h-10 w-[200px] md:w-[350px] lg:w-[593px] items-center rounded-3xl border border-yt-light-black bg-yt-black "
        >
          <input
            type="text"
            placeholder="Search"
            autoComplete="on"
            className="ml-6 h-6 w-full bg-yt-black text-start align-middle text-yt-white focus:outline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="h-10 w-16 rounded-r-3xl border-l-2  bg-yt-light-black px-2 py-0.5">
            <PiMagnifyingGlassLight
              size={22}
              className="inline-block  text-center font-thin text-yt-white"
            />
          </button>
        </form>
        <div className="hidden md:block text-yt-white bg-yt-light w-10 h-10 items-center mx-2 p-2 justify-center hover:bg-yt-light-black rounded-full ml-4">
          <MdMic className="text-center" size={23} />
        </div>
      </div>

      {/* Nav right section  */}

      <div className="items-center justify-center hidden lg:block ">
        <div className="flex flex-row items-center">
          <div className="mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <BiVideoPlus size={25} className="text-center text-yt-white" />
            </div> 
            <div className="mx-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <FaRegBell size={20} className=" text-center text-yt-white"/>
            </div>
          <div>
            <button className="rounded-3xl border-2 border-solid border-yt-blue bg-yt-black px-4 py-1 text-yt-white">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
