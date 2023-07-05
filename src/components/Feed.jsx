import React, { useContext } from "react";
import { Sidebar, Videos } from "./index";
import { CategoryItems } from "../utils/constants";
import "../App.css";
import { Context } from "../context/contextAPi";

function Feed() {
  const { selectedCategory, setSelectedCategory, open } = useContext(Context);
  return (
    <>
      <Sidebar />
      {/* Top scrollbar */}
      <div
        className={`yt-scrollbar  h-[calc(100%-53px)] w-[calc-(100%-10px)] md:w-[calc(100%-240px)] bg-yt-black pt-16 ${
          !open ? "ml-4 md:w-[calc(100%-40px)]" : "ml-2 md:ml-60"
        }`}
      >
        <div className="relative flex  flex-row overflow-x-scroll px-3 scrollbar-hide">
          {CategoryItems.map((item, index) => (
            <h2
              className={`my-3 mr-3 cursor-pointer whitespace-nowrap break-keep rounded-xl bg-yt-light px-4 py-2 text-sm font-normal text-yt-white hover:bg-yt-light-black
                ${
                  item === selectedCategory
                    ? "bg-yt-light-black"
                    : "bg-yt-light"
                }
                 `}
              onClick={() => {
                setSelectedCategory(item);
              }}
              key={index}
            >
              {item}
            </h2>
          ))}
        </div>
      </div>

      {/* Videos section   */}
      <div>
        <Videos />
      </div>
    </>
  );
}

export default Feed;
