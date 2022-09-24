import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsVolumeDownFill,
} from "react-icons/bs";

const VolumeBar = ({
  value,
  min,
  max,
  onChange,
  setVolume,
}: VolumeBarProps) => (
  <div className="hidden flex-1 items-center justify-end lg:flex">
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value === 0 && (
      <BsFillVolumeMuteFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(1)}
      />
    )}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="2xl:w-40 ml-2 h-1 md:w-32 lg:w-32"
    />
  </div>
);

export default VolumeBar;

interface VolumeBarProps {
  value: number;
  min: string;
  max: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setVolume: Dispatch<SetStateAction<number>>;
}
