import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const SearchVideoFeed = ({
  videos: {
    title,
    channelTitle,
    videoId,
    thumbnail,
    channelThumbnail,
    lengthText,
    publishedText,
    viewCount,
    description
  },
}) => {
  return (
    <div className="sm-device flex justify-start my-4 max-w-[calc(100%-26px)] ">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative w-[340px]">
          <img
            src={thumbnail?.[0]?.url || demoThumbnailUrl}
            alt={title}
            className="w-[340px] h-[180px] border rounded-xl"
          />
          <p className="text-yt-white font-semibold rounded-lg bg-yt-black bg-opacity-90 absolute top-[80%] right-2 pl-2 pr-2">
            {lengthText}
          </p>
        </div>
      </Link>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className=" sm ml-4 md:w-[100%] h-[106px] rounded-b-xl mb-5 max-w-[600px]">
          <div>
            <h3 className="text-yt-white font-medium">
              {title || demoVideoTitle.slice(0, 30)}
            </h3>
            <p className="text-yt-grey text-[13px]">
            {parseInt(viewCount).toLocaleString()} ● {publishedText}
          </p>
          </div>
          <div className="flex py-3 ">
            <img
              src={channelThumbnail?.[0]?.url}
              alt="channelImage"
              className="rounded-full w-6 h-6 "
            />
            <p className="text-yt-grey ml-2">{channelTitle || demoChannelTitle}</p>
          </div>
          <p className="text-yt-grey text-sm">{description.slice(0,85)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchVideoFeed;
