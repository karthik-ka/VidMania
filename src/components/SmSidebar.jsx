import React, { useContext } from "react";
import { SmSideBarItems } from "../utils/constants";
import { Context } from "../context/contextAPi";

const SmSidebar = () => {
  const { selectedCategory, setSelectedCategory, open } = useContext(Context);
  return (
    <div
      className={`yt-scrollbar t-0 l-0 fixed mt-14 h-[calc(100vh-53px)] w-60 overflow-auto bg-yt-black text-yt-white ${
        !open && "hidden"
      }`}
    >
      <div className="mb-4 ">
        {SmSideBarItems.map((item) => {
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
    </div>
  );
};

export default SmSidebar;
