import { Song } from "@store/services/shazamCore.types";
import React, { Dispatch } from "react";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}: ControlsProps) => (
  <div className="2xl:w-80 flex items-center justify-around md:w-36 lg:w-52">
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden cursor-pointer sm:block"
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden cursor-pointer sm:block"
    />
  </div>
);

export default Controls;

interface ControlsProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: Dispatch<React.SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: Dispatch<React.SetStateAction<boolean>>;
  currentSongs: Song[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}
