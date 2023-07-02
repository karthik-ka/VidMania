import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture,  demoChannelTitle, demoChannelUrl} from "../utils/constants";
import {BsCheckCircleFill} from "react-icons/bs";

const ChannelCard = ({channelDetails}) => {

  return (
    <div className="flex flex-wrap justify-start md:w-[400px] sm:w-full " >
      <Link to={`/channel/${channelDetails?.id?.channelId || demoChannelUrl}`}>
        <div className="flex flex-col justify-center text-center text-yt-white">
          <img
            src={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetails?.snippet?.title}
            className=" rounded-full h-[200px] w-[200] mb-2 border-solid border-2 border-yt-light-black"
          />
          <h6>{channelDetails?.snippet?.title || demoChannelTitle}
           <BsCheckCircleFill size={14} className="text-yt-grey ml-2"/></h6>
        </div>
        <p>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()}Subscribers</p>
      </Link>
    </div>
  )
}
export default ChannelCard
