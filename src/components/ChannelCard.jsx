import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture,  demoChannelTitle, demoChannelUrl} from "../utils/constants";
import {BsCheckCircleFill} from "react-icons/bs";

const ChannelCard = ({channelDetails}) => {

  return (
    <div className="flex flex-wrap justify-start md:w-[400px] sm:w-full " >
      <Link to={`/channel/${channelDetails?.channelId || demoChannelUrl}`}>
        <div className="flex flex-col justify-center text-center text-yt-white">
          <img
            src={channelDetails?.thumbnail[0].url || demoProfilePicture}
            alt={channelDetails?.title}
            className=" rounded-full h-[200px] w-[200] mb-2 border-solid border-2 border-yt-light-black"
          />
          <h6>{channelDetails?.title || demoChannelTitle}</h6>
        </div>
        {/* <p>{parseInt(channelDetails?.subscriberCount).toLocaleString()}Subscribers</p> */}
      </Link>
    </div>
  )
}
export default ChannelCard
