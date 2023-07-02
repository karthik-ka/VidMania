import React, { useContext } from 'react'
import { SmSideBarItems } from '../utils/constants';
import { Context } from '../context/contextAPi';

const SmSidebar = () => {
    const {selectedCategory, setSelectedCategory, open} = useContext(Context);
  return (

    <div className={`yt-scrollbar overflow-auto w-60 bg-yt-black h-[calc(100vh-53px)] mt-14 fixed t-0 l-0 text-yt-white ${!open && "hidden" }`}>
      <div className='mb-4 '>
         {
            SmSideBarItems.map((item)=>{
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

export default SmSidebar
