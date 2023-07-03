import React, { useContext } from 'react'
import {Sidebar, Videos} from './index'
import { CategoryItems } from '../utils/constants'
import "../App.css"
import { Context } from '../context/contextAPi'

function Feed() {

  const {selectedCategory, setSelectedCategory, open} = useContext(Context);
  return (
    <>
    <Sidebar />
    {/* */}
    {/* Top scrollbar */}
      <div className={`yt-scrollbar  w-[calc(100%-240px)] h-[calc(100%-53px)] pt-16 bg-yt-black ${!open ? "ml-6 w-[calc(100%-60px)]" : "ml-60"}`}>
        <div className='flex flex-row  px-3 overflow-x-scroll relative scrollbar-hide'>
          {
            CategoryItems.map((item, index)=>(
              <h2 
                className={`text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light my-3 mr-3 cursor-pointer rounded-xl hover:bg-yt-light-black
                ${item=== selectedCategory ? "bg-yt-light-black" : "bg-yt-light"}
                 `}
                 onClick={()=>{setSelectedCategory(item)}}
                key={index}>
                {item}</h2>
            ))}
        </div>
      </div>

    {/* Videos section   */}
      <div>
        <Videos />
      </div>
    </>
  )
}

export default Feed