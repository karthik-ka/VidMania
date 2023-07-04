import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture, demoVideoUrl } from "../utils/constants";
// import { Context } from "../context/contextAPi";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({
  video: {
    title,
    channelTitle,
    videoId,
    thumbnail,
    channelThumbnail,
    lengthText,
    publishedText,
    viewCount,
  },
}) => {
  // const { open } = useContext(Context);

  return (
    <div className="flex flex-wrap justify-start sm:w-full md:w-[320px]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative">
          <img
            src={thumbnail?.[0]?.url || "demoThumbnailUrl"}
            alt={title}
            className="h-[180px] w-[340px] rounded-xl border"
          />
          <p className="absolute right-2 top-[80%] rounded-lg bg-yt-black bg-opacity-90 pl-2 pr-2 font-semibold text-yt-white">
            {lengthText}
          </p>
        </div>
      </Link>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="mb-5 h-[106px] w-[340px] rounded-b-xl">
          <div className=" flex max-w-[320px]">
            <img
              src={channelThumbnail?.[0]?.url || demoProfilePicture}
              alt="channelImage"
              className="mt-2 h-8 w-8 rounded-full"
            />
            <h3 className="ml-4 mr-2 font-medium text-yt-white">
              {title || ""}
            </h3>
          </div>
          <div className="">
            <p className="ml-12 text-yt-grey ">{channelTitle || ""}</p>
            <p className="text-s ml-12 text-yt-grey">
              {`${abbreviateNumber(viewCount)}`} ● {publishedText}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
