import { Song } from "@store/services/shazamCore.types";

import SongBar from "./SongBar";

const RelatedSongs = ({
  activeSong,
  data,
  artistId,
  handlePauseClick,
  handlePlayClick,
  isPlaying,
}: RelatedSongsProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-white">Related Songs:</h1>

      <div className="mt-6 flex w-full flex-col">
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;

interface RelatedSongsProps {
  data: Song[] | undefined;
  artistId?: string;
  isPlaying: boolean;
  activeSong: Song | null;
  handlePauseClick?: () => void;
  handlePlayClick?: (song: Song, i: number) => void;
}
