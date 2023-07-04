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
    <div className="related-section flex ml-8 w-[340px] md:w-full my-2">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative h-full w-full md:w-[340px] lg:w-[160px]">
          <img
            src={thumbnail?.[0]?.url || demoThumbnailUrl}
            alt={title}
            className="h-[180px] w-[340px] lg:h-[100px] lg:w-[180px] rounded-xl border md:mr-32"
          />
          <p className="absolute right-2 top-[70%] rounded-lg bg-yt-black bg-opacity-90 pl-2 pr-2 text-sm font-semibold text-yt-white">
            {lengthText}
          </p>
        </div>
      </Link>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="h-full md:w-[380px] rounded-b-xl md:ml-4">
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
