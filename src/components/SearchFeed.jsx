import React, { useContext, useEffect, useState } from "react";
import { Sidebar, SearchVideoFeed } from "./index";
import "../App.css";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextAPi";

function SearchFeed() {
  const [searchVideos, setSearchVideos] = useState([]);
  const { searchTerm } = useParams();
  const { open } = useContext(Context);

  useEffect(() => {
    fetchFromApi(`search?query=${searchTerm}`).then((data) => {
      console.log("Search==", data);
      setSearchVideos(data?.data);
    });
  }, [searchTerm]);

  // if(!searchVideos) return "Loading..."

  return (
    <>
      <Sidebar />
      {/* Videos section   */}
      <div className={`bg-yt-black pt-16 w-[340px] ml-4 ${!open ? "ml-2 md:mx-4 " : "ml-5 md:ml-72"}`}>
        <h1 className="mb-4 text-sm font-semibold text-yt-white sm:text-lg sm:font-semibold">
          Search Results for "{searchTerm}" Videos
        </h1>
        <div>
          {searchVideos.map((item, index) => (
            <SearchVideoFeed key={index} videos={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchFeed;
