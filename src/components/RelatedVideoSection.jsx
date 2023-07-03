import React from "react";
import { Link } from "react-router-dom";
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl,} from "../utils/constants";
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
    description
  },
}) => {
  return (
    <div className="sm-device flex justify-start max-w-[calc(100%-26px)]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative w-[180px] h-[100px]">
          <img
            src={thumbnail?.[0]?.url || demoThumbnailUrl}
            alt={title}
            className="w-[180px] h-[100px] border rounded-xl"
          />
          <p className="text-yt-white font-semibold text-sm rounded-lg bg-yt-black bg-opacity-90 absolute top-[70%] right-2 pl-2 pr-2">
            {lengthText}
          </p>
        </div>
      </Link>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className=" sm ml-4 md:w-[100%] h-[106px] rounded-b-xl mb-5 max-w-[600px]">
          <div>
            <h3 className="text-yt-white font-medium">
              {title.slice(0,30) || demoVideoTitle.slice(0, 30)}...
            </h3>
            <p className="text-yt-grey text-[13px]">
            {`${abbreviateNumber(viewCount)}`} ● {publishedTimeText}
          </p>
          </div>
          <div className="flex py-1 ">
            <img
              src={authorThumbnail?.[0]?.url}
              alt="channelImage"
              className="rounded-full w-6 h-6 "
            />
            <p className="text-yt-grey ml-2">{channelTitle || demoChannelTitle}</p>
          </div>
          <p className="text-yt-grey text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};
export default RelatedVideoSection