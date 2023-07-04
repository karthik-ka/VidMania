import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import { RelatedVideoSection } from "./index";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { demoProfilePicture } from "../utils/constants";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`video?id=${id}`).then((data) => {
      console.log("videos----",data);
      setVideoDetail(data);
    });

    fetchFromApi(`related?id=${id}`).then((data) =>
      setRelatedVideos(data.data)
    );
  }, [id]);
  // console.log("Related videos===", relatedVideos);

  if (!videoDetail) return "Loading...";

  const { title, channelTitle, viewCount } = videoDetail;

  return (
    <div className="flex h-[calc(100%-56px)] flex-row justify-center">
      <div className="flex w-full max-w-[1280px] flex-col lg:flex-row ">
        <div className="mt-14 flex flex-col overflow-y-auto px-16 py-3 lg:w-[calc(100%-350px)] lg:py-6 xl:w-[100%-400px]">
          <div className=" lg:h[400px] xl:h[550px] ml-[-16px] mr-[-16px] h-[200px] md:h-[400px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${id}`}
              controls
              width="95%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>

          <div className="mt-4 line-clamp-2 text-sm font-bold text-yt-white md:text-xl">
            {title}
          </div>
          <div>
            <span className="text-yt-grey ">
              {`${abbreviateNumber(viewCount)}`} views
            </span>
          </div>

          <div className="mt-4 flex flex-col justify-between  md:flex-row">
            <Link to={`/channel/${videoDetail?.channelId}`}>
              <div className="flex">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 overflow-hidden rounded-full">
                    <img
                      className="h-full w-full object-cover"
                      src={demoProfilePicture}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="ml-3 flex flex-col">
                  <div className="text-md flex items-center font-semibold text-yt-white">
                    {channelTitle}
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex text-yt-white md:mt-0">
              <div className="flex h-11 items-center justify-center rounded-3xl bg-yt-light px-6 hover:bg-yt-light-black">
                <BiSolidLike className="text-xl text-yt-white " />
                <BiSolidDislike className="ml-6 text-xl text-yt-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="yt-scrollbar ml-[-20px] flex max-h-[100vh] flex-col overflow-y-auto py-2 md:mt-20 lg:w-[350px] xl:w-[400px]">
          {relatedVideos.map((item, index) => (
            <RelatedVideoSection key={index} videos={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
