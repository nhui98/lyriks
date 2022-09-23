import Sidebar from "@components/common/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286]">
        {/* Searchbar */}

        <div className="hide-scrollbar flex h-[calc(100vh-72px)] flex-col-reverse overflow-y-scroll px-6 xl:flex-row">
          <div className="h-fit flex-1 pb-40">
            <Routes>
              <Route />
            </Routes>
          </div>

          <div className="relative top-0 h-fit xl:sticky">{/* Top play */}</div>
        </div>
      </div>

      {/* <div className="animate-slideup absolute bottom-0 left-0 right-0 z-10 flex h-28 rounded-t-3xl bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg"> */}
      {/* Music Player */}
      {/* </div> */}
    </div>
  );
}

export default App;
