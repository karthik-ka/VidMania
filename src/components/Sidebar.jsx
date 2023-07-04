import React, { useContext } from "react";
import { SideBarItems } from "../utils/constants";
import "../App.css";
import { Context } from "../context/contextAPi";

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory, open } = useContext(Context);

  return (
    <div
      className={`yt-scrollbar t-0 l-0 fixed z-40 mt-14 h-[calc(100vh-53px)] w-60  overflow-auto bg-yt-black text-yt-white  ${
        !open && "hidden"
      }`}
    >
      <div className="mb-4 ">
        {SideBarItems.Top.map((item) => {
          return (
            <div
              key={item.name}
              className={`my-1 flex h-10 cursor-pointer items-center justify-start rounded-xl px-3 hover:bg-yt-light-black 
                  ${
                    item.name === selectedCategory
                      ? "bg-yt-light-black"
                      : "bg-yt-black"
                  }
                  `}
              onClick={() => setSelectedCategory(item.name)}
            >
              <span className="ml-2 mr-5">{item.icon}</span>
              <p className="p-2 text-sm font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>

      <hr className="my-2 text-yt-light-black" />
      <div className="mb-4">
        {SideBarItems.Middle.map((item) => {
          return (
            <div
              key={item.name}
              className={`my-1 flex h-10 cursor-pointer items-center justify-start rounded-xl px-3 hover:bg-yt-light-black 
                  ${
                    item.name === selectedCategory
                      ? "bg-yt-light-black"
                      : "bg-yt-black"
                  }
                  `}
              onClick={() => setSelectedCategory(item.name)}
            >
              <span className="ml-2 mr-5">{item.icon}</span>
              <p className="p-2 text-sm font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>

      <hr className="my-2 text-yt-light-black" />
      <div className="mb-4">
        {SideBarItems.Explore.map((item) => {
          return (
            <div
              key={item.name}
              className={`my-1 flex h-10 cursor-pointer items-center justify-start rounded-xl px-3 hover:bg-yt-light-black 
                    ${
                      item.name === selectedCategory
                        ? "bg-yt-light-black"
                        : "bg-yt-black"
                    }
                    `}
              onClick={() => setSelectedCategory(item.name)}
            >
              <span className="ml-2 mr-5">{item.icon}</span>
              <p className="p-2 text-sm font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>
      <span className="text-sm text-yt-grey ml-2 pb-4 font-semibold">© 🇩🇪‌🇸‌🇮‌🇬‌🇳‌🇪‌🇩‌ & 🇩‌🇪‌🇻‌🇪‌🇱‌🇴‌🇵‌🇪‌🇩‌ 🇧‌🇾‌ 🇰‌🇦‌🇷‌🇹‌🇭‌🇮‌🇰 ‌</span>
    </div>
  );
};

export default Sidebar;
