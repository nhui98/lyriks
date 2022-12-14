import Error from "@components/Common/Error";
import Loader from "@components/Common/Loader";
import SongCard from "@components/Common/Songcard";
import { genres } from "@constants/genres";
import { selectGenreListId } from "@store/reducers/playerSlice";
import { useAppDispatch, useAppSelector } from "@store/store";

import { useGetSongsByGenreQuery } from "../store/services/shazamCore";

const Discover = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, activeSong, genreListId } = useAppSelector(
    (state) => state.player
  );
  const { data, isFetching, isError } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (isError) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-10 flex w-full flex-col items-center justify-between sm:flex-row">
        <h2 className="text-left text-3xl font-bold text-white">Discover</h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId || "pop"}
          className="mt-5 rounded-lg bg-black p-3 text-sm text-gray-300 outline-none sm:mt-0"
        >
          {genres.map(({ title, value }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
