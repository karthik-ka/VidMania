import { createContext, useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

export const Context = createContext();

export const AppContext = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetchFromApi(`search?query=${selectedCategory}`)
    .then((data)=>{
        console.log("videos==",data.data);
        setVideos(data.data)
    })
    
  }, [selectedCategory]);

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        setVideos,
        searchTerm,
        setSearchTerm,
        open,
        setOpen
      }}
    >
      {children}
    </Context.Provider>
  );
};
