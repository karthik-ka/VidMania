import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { demoThumbnailUrl, demoChannelTitle, demoProfilePicture,
         demoVideoTitle, demoVideoUrl,} from "../utils/constants";
import { Context } from "../context/contextAPi";
import { abbreviateNumber } from "js-abbreviation-number";


const VideoCard = ({video:{title,channelTitle,videoId,thumbnail,channelThumbnail,lengthText,publishedText,viewCount}}) => {

  const {open} = useContext(Context)

  return (
    <div className={`flex flex-wrap justify-start sm:w-full ${!open ? "md:w-[400px]" : "md:w-[320px]"}`} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative">
          <img
            src={thumbnail?.[0]?.url || demoThumbnailUrl}
            alt={title}
            className="w-[340px] h-[180px] border rounded-xl"
          />
          <p className="text-yt-white font-semibold rounded-lg bg-yt-black bg-opacity-90 absolute top-[80%] right-2 pl-2 pr-2" >{lengthText}</p>
        </div>
      </Link>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="w-[340px] h-[106px] rounded-b-xl mb-5">
          <div className=" flex max-w-[320px]">
            <img src={channelThumbnail?.[0]?.url || demoProfilePicture} alt="channelImage" 
              className="rounded-full w-8 h-8 mt-2"
            />
            <h3 className="text-yt-white font-medium mr-2 ml-4">{title|| demoVideoTitle.slice(0,30)}</h3>
          </div>
          <div className="">
            <p className="text-yt-grey ml-12 ">{channelTitle || demoChannelTitle}</p>
            <p className="text-yt-grey ml-12 text-s">{`${abbreviateNumber(viewCount)}`} ● {publishedText}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
