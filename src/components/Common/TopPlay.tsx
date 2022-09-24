import "swiper/css";
import "swiper/css/free-mode";

import { playPause, setActiveSong } from "@store/reducers/playerSlice";
import { useGetTopChartsQuery } from "@store/services/shazamCore";
import { Song } from "@store/services/shazamCore.types";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PlayPause from "./PlayPause";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}: TopChartCardProps) => (
  <div className="mb-2 flex w-full cursor-pointer flex-row items-center rounded-lg p-4 py-2 hover:bg-[#4c426e]">
    <h3 className="mr-3 text-base font-bold text-white">{i + 1}.</h3>
    <div className="flex flex-1 flex-row items-center justify-between">
      <img
        src={song?.images?.coverart}
        alt={song?.title}
        className="h-20 w-20 rounded-lg"
      />
      <div className="mx-3 flex flex-1 flex-col justify-center">
        <Link to={`/songs/${song?.key}`}>
          <p className="text-xl font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="mt-1 text-base font-bold text-gray-300">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

interface TopChartCardProps {
  song: Song;
  i: number;
  isPlaying: boolean;
  activeSong: Song | null;
  handlePauseClick: () => void;
  handlePlayClick: () => void;
}

const TopPlay = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef<HTMLDivElement>(null);

  const topPlays = data?.slice(0, 5);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: Song, i: number) => {
    if (!data) return;
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="ml-0 mb-6 flex max-w-full flex-1 flex-col xl:ml-6 xl:mb-0 xl:max-w-[500px]"
    >
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top Charts</h2>
          <Link to={"/top-charts"}>
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              i={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top Artists</h2>
          <Link to={"/top-artists"}>
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((song) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: "25%", height: "auto" }}
            >
              <Link to={`/artists/${song.artists[0].adamid}`}>
                <img
                  src={song?.images.background}
                  alt="name"
                  className="w-full rounded-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
