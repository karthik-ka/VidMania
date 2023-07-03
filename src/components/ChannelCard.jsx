import React from "react";
import { Link } from "react-router-dom";
import {
  demoProfilePicture,
  demoChannelUrl,
} from "../utils/constants";
import { BsCheckCircleFill } from "react-icons/bs";

const ChannelCard = ({ channelDetails }) => {
  return (
    <div className="sm-device flex justify-start my-4 max-w-[calc(100%-26px)] ">
      <Link to={`/channel/${channelDetails?.channelId || demoChannelUrl}`}>
        <div className="w-[340px] ">
          <img
            src={channelDetails.thumbnail?.[0]?.url || demoProfilePicture}
            alt={channelDetails.title}
            className="img-1 w-[180px] h-[180px] ml-20 border rounded-full"
          />
        </div>
      </Link>
      <Link to={`/channel/${channelDetails?.channelId || demoChannelUrl}`}>
        <div className=" sm ml-4 md:w-[100%] h-[106px] rounded-b-xl mb-5 mt-6 max-w-[600px] text-yt-white">
          <div className="flex mb-4">
            <h3 className="text-yt-white text-xl font-bold ">
              {channelDetails.channelTitle}
            </h3>
            <BsCheckCircleFill className="text-yt-grey text-sm mt-3 ml-2"/>
          </div>
          <p className="text-yt-grey text-sm mb-2 ">
            @{channelDetails.title} ● {channelDetails.subscriberCount}
          </p>
          <p className="text-yt-grey text-sm ">{channelDetails.description}</p>
        </div>
      </Link>
    </div>
  );
};
export default ChannelCard;
