import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from "./components/index"
import "./App.css"
import { AppContext } from './context/contextAPi';
function App() {
  return (
    <AppContext>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="/video/:id" element={<VideoDetails/>} />
            <Route path="/channel/:id" element={<ChannelDetails/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed/>} />
          </Routes>
          </div>
      </BrowserRouter>
    </AppContext>
    
  );
}

export default App;
