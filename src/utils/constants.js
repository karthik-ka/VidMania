import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { MdVideoLibrary, MdOutlineLocalMovies } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlineClockCircle, AiOutlineBulb } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { GiDress } from "react-icons/gi";
import { HiSignal } from "react-icons/hi2";


export const SideBarItems = {
  Top: [
    { icon: <AiFillHome size={21} />, name: "Home" },
    { icon: <SiYoutubemusic size={21} />, name: "Shorts" },
    { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions" },
  ],
  Middle: [
    { icon: <MdVideoLibrary size={21} />, name: "Library" },
    { icon: <VscHistory size={21} />, name: "History" },
    { icon: <AiOutlinePlaySquare size={21} />, name: "Your videos" },
    { icon: <AiOutlineClockCircle size={21} />, name: "Watch later" },
    { icon: <BiLike size={21} />, name: "Liked videos" },
  ],
  Explore: [
    { icon: <HiOutlineFire size={21} />, name: "Trending" },
    { icon: <IoMusicalNoteOutline size={21} />, name: "Music" },
    { icon: <MdOutlineLocalMovies size={21} />, name: "Movies" },
    { icon: <HiSignal size={21} />, name: "Live" },
    { icon: <SiYoutubegaming size={21} />, name: "Gaming" },
    { icon: <BsNewspaper size={21} />, name: "News" },
    { icon: <CiTrophy size={23} />, name: "Sports" },
    { icon: <AiOutlineBulb size={21} />, name: "Learning" },
    { icon: <GiDress size={21} />, name: "Fasion & beauty" },
  ],
};

export const SmSideBarItems = 
   [
    { icon: <AiFillHome size={21} />, name: "Home" },
    { icon: <SiYoutubemusic size={21} />, name: "Shorts" },
    { icon: <HiOutlineFire size={21} />, name: "Trending" },
    { icon: <IoMusicalNoteOutline size={21} />, name: "Music" }
  ];

export const CategoryItems = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Malayalam Cinema",
  "T-Series",
  "Animated films",
  "News",
  "Course",
  "Kollywood",
  "Tollywood",
  "Hollywood",
  "Sitcom",
  "Cricket",
  "Tech",
  "Recently Uploaded"
];



export const logo= "https://github.com/antonfrancisjeejo/youtube-clone-react-tailwindcss/blob/main/src/assets/yt-logo-white.png?raw=true";

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Channel name not available';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
