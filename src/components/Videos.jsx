import React, { useContext } from 'react'
import { Context } from '../context/contextAPi'

const Videos = () => {

    const {videos, setVideos} = useContext(Context); 
    
    console.log("videos==",videos);

  return (
    <div>
      Videos
    </div>
  )
}

export default Videos
