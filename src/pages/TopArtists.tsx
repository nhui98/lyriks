import ArtistCard from "@components/Common/ArtistCard";
import Error from "@components/Common/Error";
import Loader from "@components/Common/Loader";
import { useGetTopChartsQuery } from "@store/services/shazamCore";

const TopArtists = () => {
  const { data, error, isFetching } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-left text-3xl font-bold text-white">
        Top Artists
      </h2>

      <div className="flex flex-wrap justify-items-center gap-8 sm:justify-start">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
