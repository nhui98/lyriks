import DetailsHeader from "@components/Common/DetailsHeader";
import Error from "@components/Common/Error";
import Loader from "@components/Common/Loader";
import RelatedSongs from "@components/Common/RelatedSongs";
import { playPause, setActiveSong } from "@store/reducers/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "@store/services/shazamCore";
import { Song } from "@store/services/shazamCore.types";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const dispatch = useAppDispatch();
  const { songid, artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(String(songid));

  const {
    data: relatedSongData,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery(String(songid));

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: Song, i: number) => {
    if (!relatedSongData) return;
    dispatch(setActiveSong({ song, i, data: relatedSongData }));
    dispatch(playPause(true));
  };

  if (isFetchingRelatedSongs || isFetchingSongDetails)
    return <Loader title="Searching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={``} songData={songData} />

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="my-1 text-base text-gray-400"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="my-1 text-base text-gray-400">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={relatedSongData}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};
export default SongDetails;
