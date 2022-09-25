import Error from "@components/Common/Error";
import Loader from "@components/Common/Loader";
import SongCard from "@components/Common/Songcard";
import { useGetSongsByCountryQuery } from "@store/services/shazamCore";
import { useAppSelector } from "@store/store";
import axios from "axios";
import { useEffect, useState } from "react";

const AroundYou = () => {
  // const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data, error, isFetching } = useGetSongsByCountryQuery("US");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://geo.ipify.org/api/v1?apiKey=at_DN2GU99tI2iSY1fFxs5ysbOhkDyPo`
  //     )
  //     .then((res) => setCountry(res?.data?.location?.country))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [country]);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-left text-3xl font-bold text-white">
        Around You
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

export default AroundYou;
