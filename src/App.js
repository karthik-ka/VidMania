import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from "./components/index"
import "./App.css"
function App() {
  return (
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
  );
}

export default App;
