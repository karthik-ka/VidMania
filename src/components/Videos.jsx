import React, { useContext } from "react";
import { Context } from "../context/contextAPi";
import { VideoCard, ChannelCard } from "./index";

const Videos = () => {
  const { videos, open } = useContext(Context);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5
      ${!open ? "ml-2 md:mx-4 lg:grid-cols-4 " : "ml-5 md:ml-72"}`}
    >
      {videos.map((item, index) => (
        <div key={index}>
          {item.videoId && <VideoCard video={item} />}
          {item.ChannelId && <ChannelCard channelDetails={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
