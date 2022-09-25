import DetailsHeader from "@components/Common/DetailsHeader";
import Error from "@components/Common/Error";
import Loader from "@components/Common/Loader";
import RelatedSongs from "@components/Common/RelatedSongs";
import { useGetArtistDetailsQuery } from "@store/services/shazamCore";
import { useAppSelector } from "@store/store";
import { useParams } from "react-router-dom";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const {
    data: artistData,
    isFetching,
    error,
  } = useGetArtistDetailsQuery(artistId);

  console.log(artistData);

  if (isFetching) return <Loader title="Loading artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {artistId && (
        <DetailsHeader artistId={artistId} artistData={artistData} />
      )}

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};
export default ArtistDetails;
