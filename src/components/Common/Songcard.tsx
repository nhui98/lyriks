import PlayPause from "@components/Common/PlayPause";
import { playPause, setActiveSong } from "@store/reducers/playerSlice";
import { Song } from "@store/services/shazamCore.types";
import { useAppDispatch } from "@store/store";
import { Link } from "react-router-dom";

const SongCard = ({ song, i, isPlaying, activeSong, data }: SongCardProps) => {
  const dispatch = useAppDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };

  return (
    <div className="cursor-point flex w-[250px] animate-slideup flex-col rounded-lg bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm">
      <div className="group relative h-56 w-full">
        <div
          className={`absolute inset-0 items-center justify-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="truncate text-lg font-semibold text-white">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="mt-1 truncate text-sm text-gray-300">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;

interface SongCardProps {
  song: Song;
  i: number;
  isPlaying: boolean;
  activeSong: Song | null;
  data: Song[];
}
