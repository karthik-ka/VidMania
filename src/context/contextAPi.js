import { createContext, useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

export const Context = createContext();

export const AppContext = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=id%2Csnippet&type=video&q=${selectedCategory}`)
    .then((data)=>{
        setVideos(data.items)
    })
    
  }, [selectedCategory]);

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        setVideos
      }}
    >
      {children}
    </Context.Provider>
  );
};
