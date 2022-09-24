/* eslint-disable jsx-a11y/media-has-caption */
import { Song } from "@store/services/shazamCore.types";
import { ChangeEvent, useEffect, useRef } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}: PlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (!ref.current) return;
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;

interface PlayerProps {
  activeSong: Song | null;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (event: ChangeEvent<HTMLAudioElement>) => void;
  onLoadedData: (event: ChangeEvent<HTMLAudioElement>) => void;
  repeat: boolean;
}
