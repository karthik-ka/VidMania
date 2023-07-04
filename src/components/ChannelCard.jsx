import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture, demoChannelUrl } from "../utils/constants";
import { BsCheckCircleFill } from "react-icons/bs";

const ChannelCard = ({ channelDetails }) => {
  return (
    <div className="searchFeed-section my-4 flex w-[340px] justify-start ">
      <Link to={`/channel/${channelDetails?.channelId || demoChannelUrl}`}>
        <div className="w-[340px] ">
          <img
            src={channelDetails.thumbnail?.[0]?.url || demoProfilePicture}
            alt={channelDetails.title}
            className="img-1 ml-20 h-[180px] w-[180px] rounded-full border"
          />
        </div>
      </Link>
      <Link to={`/channel/${channelDetails?.channelId || demoChannelUrl}`}>
        <div className=" mt-6 ml-4 h-[106px] w-full md:w-[400px] rounded-b-xl text-yt-white">
          <div className="mb-4 flex">
            <h3 className="text-xl font-bold text-yt-white ">
              {channelDetails.channelTitle}
            </h3>
            <BsCheckCircleFill className="ml-2 mt-3 text-sm text-yt-grey" />
          </div>
          <p className="mb-2 text-sm text-yt-grey ">
            @{channelDetails.title} ● {channelDetails.subscriberCount}
          </p>
          <p className="text-sm text-yt-grey max-w-[340px]">{channelDetails.description}</p>
        </div>
      </Link>
    </div>
  );
};
export default ChannelCard;
