import React, { useContext } from "react";
import { Context } from "../context/contextAPi";
import { VideoCard, ChannelCard } from "./index";

const Videos = () => {
  // console.log("videos==" , videos);

  const { videos, open } = useContext(Context);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ${!open ? "ml-6" : "ml-72"}`}>
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
