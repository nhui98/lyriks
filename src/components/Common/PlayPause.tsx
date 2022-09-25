import { Song } from "@store/services/shazamCore.types";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  song,
  activeSong,
  handlePause,
  handlePlay,
  isPlaying,
}: PlayPauseProps) =>
  isPlaying && song && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;

interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: Song | null;
  song: Song | null;
  handlePause?: () => void;
  handlePlay?: () => void;
}
