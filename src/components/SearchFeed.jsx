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
      <Sidebar/>
      {/* Videos section   */}
      <div
        className={`pt-16 bg-yt-black ${!open ? "ml-14" :"ml-72" }`}
      >
        <h1 className="text-yt-white sm:font-semibold sm:text-lg mb-4 font-semibold text-sm">
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
