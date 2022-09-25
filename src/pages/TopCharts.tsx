import Error from "@components/Common/Error";
import Loader from "@components/Common/Loader";
import SongCard from "@components/Common/Songcard";
import { useGetTopChartsQuery } from "@store/services/shazamCore";
import { useAppSelector } from "@store/store";

const TopCharts = () => {
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data, error, isFetching } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-left text-3xl font-bold text-white">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap justify-items-center gap-8 sm:justify-start">
        {data?.map((song, i) => (
          <SongCard
            i={i}
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
