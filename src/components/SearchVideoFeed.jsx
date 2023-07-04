import React from "react";
import { Link } from "react-router-dom";
import { ChannelCard } from "./index";
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
    description,
    type,
  },
  videos,
}) => {
  return (
    <>
      {type === "channel" && <ChannelCard channelDetails={videos} />}
      <div className="sm-device my-8 flex max-w-[calc(100%-56px)] justify-start">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div className="relative w-[340px] ">
            <img
              src={thumbnail?.[0]?.url || demoThumbnailUrl}
              alt={title}
              className="img-1 h-[180px] w-[340px] rounded-xl border"
            />
            <p className="absolute right-2 top-[80%] rounded-lg bg-yt-black bg-opacity-90 pl-2 pr-2 font-semibold text-yt-white">
              {lengthText}
            </p>
          </div>
        </Link>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div className=" sm mb-5 ml-4 h-[106px] max-w-[600px] rounded-b-xl md:w-[100%]">
            <div>
              <h3 className="font-medium text-yt-white">
                {title || demoVideoTitle.slice(0, 30)}
              </h3>
              <p className="text-[13px] text-yt-grey">
                {parseInt(viewCount).toLocaleString()} ● {publishedText}
              </p>
            </div>
            <div className="flex py-3 ">
              <img
                src={channelThumbnail?.[0]?.url}
                alt="channelImage"
                className="h-6 w-6 rounded-full "
              />
              <p className="ml-2 text-yt-grey">
                {channelTitle || demoChannelTitle}
              </p>
            </div>
            <p className="text-sm text-yt-grey">{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SearchVideoFeed;
