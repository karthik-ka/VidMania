import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import {BsCheckCircleFill} from "react-icons/bs";
import {VideoCard} from "./index";

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`search?query=${id}`).then((data) => {
      setChannelDetails(data?.data);
      console.log("channelDetails---",data.data);
    });
    fetchFromApi(`channel?id=${id}`).then((data) => {
      setVideos(data?.data);
      console.log("channelVideos---",data.data );
    });
  }, [id]);


  return (
    
    <div className="h-[calc(100%-56px)] bg-yt-black">
      <div
        className="h-80"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 77%, rgba(0,30,98,1) 92%)",
        }}
      />
      <div>
        <img
          src={channelDetails[0]?.thumbnail?.[0]?.url || demoProfilePicture}
          alt={channelDetails[0]?.title}
          className="center w-[180px] h-[180px]  mt-[-5rem] border rounded-full"
        />
        <div className="text-center">
        <div className="flex justify-center">
            <h3 className="text-yt-white text-xl font-bold">
              {channelDetails[0]?.channelTitle}
            </h3>
            <BsCheckCircleFill className="text-yt-grey text-sm mt-3 ml-2"/>
        </div>
        <p className="text-yt-grey text-sm mb-2 ">
          {channelDetails[0]?.subscriberCount}
        </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-20 ">
        {
          videos.map((item, idx)=>(
            <div className="my-4">
              <VideoCard key={idx} video={item}  />
            </div>
             
          ))
        }  
      </div>
    </div>
  );
};

export default ChannelDetails;
