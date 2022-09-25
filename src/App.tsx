import MusicPlayer from "@components/Common/MusicPlayer";
import Searchbar from "@components/Common/SearchBar";
import Sidebar from "@components/Common/Sidebar";
import TopPlay from "@components/Common/TopPlay";
import AroundYou from "@pages/AroundYou";
import ArtistDetails from "@pages/ArtistDetails";
import Discover from "@pages/Discover";
import SongDetails from "@pages/SongDetails";
import TopArtists from "@pages/TopArtists";
import TopCharts from "@pages/TopCharts";
import { useAppSelector } from "@store/store";
import { Route, Routes } from "react-router-dom";

function App() {
  const { activeSong } = useAppSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="hide-scrollbar flex h-[calc(100vh-72px)] flex-col-reverse overflow-y-scroll px-6 xl:flex-row">
          <div className="h-fit flex-1 pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/top-artists" element={<TopArtists />} />
            </Routes>
          </div>
          <div className="relative top-0 h-fit xl:sticky">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex h-28 animate-slideup rounded-t-3xl bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
