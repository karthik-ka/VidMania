import React, { useState } from 'react';
import {SideBarItems} from "../utils/constants";
import "../App.css"

const Sidebar = () => {
    const [active, setActive] = useState("")
  return (
    <div className='yt-scrollbar overflow-auto w-60 bg-yt-black h-[calc(100vh-53px)] mt-14 fixed t-0 l-0 text-yt-white'>
      <div className='mb-4'>
         {
            SideBarItems.Top.map((item, index)=>{
                return (
                  <div key={index} className= {`flex h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                  ${item.name === active ? "bg-yt-light-black" : "bg-yt-black" }
                  `}
                  onClick={()=>setActive(item.name) }
                  >
                    <span className='ml-2 mr-5'>{item.icon}</span>
                     <p className='p-2 text-sm font-medium'>{item.name}</p>
                  </div>
                )
            })
         }
      </div>

      <hr className='text-yt-light-black my-2'/>
      <div className='mb-4'>
         {
            SideBarItems.Middle.map((item, index)=>{
                return (
                  <div key={index} className= {`flex h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                  ${item.name === active ? "bg-yt-light-black" : "bg-yt-black" }
                  `}
                  onClick={()=>setActive(item.name) }
                  >
                    <span className='ml-2 mr-5'>{item.icon}</span>
                     <p className='p-2 text-sm font-medium'>{item.name}</p>
                  </div>
                )
            })
         }
      </div>

      <hr className='text-yt-light-black my-2'/>
        <div className='mb-4'>
           {
              SideBarItems.Explore.map((item, index)=>{
                  return (
                    <div key={index} className= {`flex h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                    ${item.name === active ? "bg-yt-light-black" : "bg-yt-black" }
                    `}
                    onClick={()=>setActive(item.name) }
                    >
                      <span className='ml-2 mr-5'>{item.icon}</span>
                       <p className='p-2 text-sm font-medium'>{item.name}</p>
                    </div>
                  )
              })
           }
        </div>

    </div>
  )
}

export default Sidebar
