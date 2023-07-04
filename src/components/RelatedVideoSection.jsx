import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { abbreviateNumber } from "js-abbreviation-number";

const RelatedVideoSection = ({
  videos: {
    title,
    channelTitle,
    videoId,
    thumbnail,
    authorThumbnail,
    lengthText,
    publishedTimeText,
    viewCount,
    description,
  },
}) => {
  return (
    <div className="sm-device flex max-w-[calc(100%-26px)] justify-start">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative h-[100px] w-[180px]">
          <img
            src={thumbnail?.[0]?.url || demoThumbnailUrl}
            alt={title}
            className="h-[100px] w-[180px] rounded-xl border"
          />
          <p className="absolute right-2 top-[70%] rounded-lg bg-yt-black bg-opacity-90 pl-2 pr-2 text-sm font-semibold text-yt-white">
            {lengthText}
          </p>
        </div>
      </Link>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className=" sm mb-5 ml-4 h-[106px] max-w-[600px] rounded-b-xl md:w-[100%]">
          <div>
            <h3 className="font-medium text-yt-white">
              {title.slice(0, 30) || demoVideoTitle.slice(0, 30)}...
            </h3>
            <p className="text-[13px] text-yt-grey">
              {`${abbreviateNumber(viewCount)}`} ● {publishedTimeText}
            </p>
          </div>
          <div className="flex py-1 ">
            <img
              src={authorThumbnail?.[0]?.url}
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
  );
};
export default RelatedVideoSection;
