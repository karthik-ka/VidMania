import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi';
import ReactPlayer from 'react-player';
import {FaCheckCircle} from "react-icons/fa"
import {BiSolidDislike, BiSolidLike} from "react-icons/bi"
import {demoProfilePicture} from "../utils/constants"

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  console.log("videDetails===",videoDetail);
  console.log("Related videos===", relatedVideos);
  const { id } = useParams();
      
    useEffect(()=>{
          fetchFromApi(`videos?id=${id}&part=snippet,statistics`)
          .then((data)=>setVideoDetail(data.items[0]));

          fetchFromApi(`/search?relatedToVideoId=${id}part=snippet%2Cid&type=video`)
          .then((data)=>setRelatedVideos(data.items))
    },[id])

   

    if(!videoDetail?.snippet) return "Loading..."

    const {snippet:{title, channelId, channelTitle},statistics:{likeCount, viewCount}} = videoDetail;
   console.log("channeltitle==", channelTitle);
  return (
    <div className='min-h-[95vh]'>
      <div className='sm:flex-col md:flex-row'>

        {/* =======React player======= */}
        <div className='flex-1'>
          <div className='react-player-main sticky w-[53%]  top-[86px]'>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player " controls="true"/>
            <h1 className='text-yt-white text-lg mt-2 max-w-2xl ml-2 font-bold'>{title}</h1>

            <div className='flex justify-between ml-2 py-4'>
              <Link to={`/channel/${channelId}`}>
                <div className='flex'>
                  <img src={demoProfilePicture} alt="profile pic" 
                  className='w-8 h-auto rounded-full'
                  />
                  <h1 className='text-yt-white font-semibold ml-3 '>{channelTitle}</h1>
                  <FaCheckCircle size={14} className='text-yt-grey ml-2 relative top-[7px]'/>
                </div>
              </Link>
              <div className='like-dislike flex mt-[-5px] text-yt-white  bg-yt-light cursor-pointer hover:bg-yt-light-black '>
              <BiSolidLike size={24}/>
              <p>{parseInt(likeCount).toLocaleString()}</p>
              <BiSolidDislike className="ml-2 border-l-[1px]" size={25}/>
              </div>
            </div>
          </div>
        </div>
        {/* =====Related Video===== */}
        <div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
