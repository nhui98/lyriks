import { Song } from "@store/services/shazamCore.types";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}: SongBarProps) => (
  <div
    className={`flex w-full flex-row items-center hover:bg-[#4c426e] ${
      activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
    } mb-2 cursor-pointer rounded-lg p-4 py-2`}
  >
    <h3 className="mr-3 text-base font-bold text-white">{i + 1}.</h3>
    <div className="flex flex-1 flex-row items-center justify-between">
      <img
        className="h-20 w-20 rounded-lg"
        src={
          artistId
            ? song?.attributes?.artwork?.url
                .replace("{w}", "125")
                .replace("{h}", "125")
            : song?.images?.coverart
        }
        alt={song?.title}
      />
      <div className="mx-3 flex flex-1 flex-col justify-center">
        {song && !artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {song?.attributes?.name}
          </p>
        )}
        <p className="mt-1 text-base text-gray-300">
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
    {song && !artistId ? (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick && handlePlayClick(song, i)}
      />
    ) : null}
  </div>
);

export default SongBar;

interface SongBarProps {
  song: Song | null;
  i: number;
  artistId?: string;
  isPlaying: boolean;
  activeSong: Song | null;
  handlePauseClick?: () => void;
  handlePlayClick?: (song: Song, i: number) => void;
}
