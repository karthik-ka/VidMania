import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi';
import ReactPlayer from 'react-player';
import {RelatedVideoSection} from "./index"
import { abbreviateNumber } from "js-abbreviation-number";
import {BiSolidDislike, BiSolidLike} from "react-icons/bi"
import {demoProfilePicture} from "../utils/constants"

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { id } = useParams();
      
    useEffect(()=>{
            fetchFromApi(`video?id=${id}`)
            .then((data)=>{
                // console.log("videos----",data);
                setVideoDetail(data)
            })

          fetchFromApi(`related?id=${id}`)
          .then((data)=>setRelatedVideos(data.data))
    },[id])
  // console.log("Related videos===", relatedVideos);

    if(!videoDetail) return "Loading..."

    const {title,channelTitle,viewCount} = videoDetail

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)]'>
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row ">
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-16 py-3 lg:py-6 overflow-y-auto mt-14'>
          <div className=' h-[200px] md:h-[400px] lg:h[400px] xl:h[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer 
            url={`http://www.youtube.com/watch?v=${id}`}
            controls
            width="95%"
            height="100%"
            style={{backgroundColor:"#000000"}}
            />
          </div>

          <div className='text-yt-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {title}
          </div>
          <div>
                  <span className='text-yt-grey '>{`${abbreviateNumber(viewCount)}`} views</span>
                </div>

          <div className='flex justify-between flex-col md:flex-row  mt-4'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                  <img className='h-full w-full object-cover' src={demoProfilePicture} alt="img" />
                </div>
              </div>
              <div className='flex flex-col ml-3'>
                <div className='text-yt-white text-md font-semibold flex items-center'>
                  {channelTitle}
                </div>
                
              </div>
            </div>
            <div className='flex text-yt-white mt-4 md:mt-0'>
               <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-yt-light hover:bg-yt-light-black'>
                   <BiSolidLike className='text-xl text-yt-white '/>
                   <BiSolidDislike className='text-xl text-yt-white ml-6'/>
               </div>
            </div>
            
          </div>
        </div>


        
        <div className="flex flex-col py-2 overflow-y-auto lg:w-[350px] xl:w-[400px] md:mt-20 ml-[-20px]">
          {
            relatedVideos.map((item, index)=>(
              <RelatedVideoSection key={index} videos={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
