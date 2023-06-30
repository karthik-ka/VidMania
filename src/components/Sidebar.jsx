import React, { useContext } from 'react';
import {SideBarItems} from "../utils/constants";
import "../App.css"
import { Context } from '../context/contextAPi';

const Sidebar = () => {

  const {selectedCategory, setSelectedCategory} = useContext(Context);

  return (
    <div className='yt-scrollbar overflow-auto w-60 bg-yt-black h-[calc(100vh-53px)] mt-14 fixed t-0 l-0 text-yt-white'>
      <div className='mb-4'>
         {
            SideBarItems.Top.map((item)=>{
                return (
                  <div key={item.name} className= {`flex h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                  ${item.name === selectedCategory ? "bg-yt-light-black" : "bg-yt-black" }
                  `}
                  onClick={()=>setSelectedCategory(item.name) }
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
            SideBarItems.Middle.map((item)=>{
                return (
                  <div key={item.name} className= {`flex h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                  ${item.name === selectedCategory ? "bg-yt-light-black" : "bg-yt-black" }
                  `}
                  onClick={()=>setSelectedCategory(item.name) }
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
              SideBarItems.Explore.map((item)=>{
                  return (
                    <div key={item.name} className= {`flex h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                    ${item.name === selectedCategory ? "bg-yt-light-black" : "bg-yt-black" }
                    `}
                    onClick={()=>setSelectedCategory(item.name) }
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
