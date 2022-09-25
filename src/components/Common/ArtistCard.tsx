import { Song } from "@store/services/shazamCore.types";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }: ArtistCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex w-[250px] animate-slideup cursor-pointer flex-col rounded-lg bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        src={track?.images.coverart}
        alt="artist"
        className="h-56 w-full rounded-lg"
      />
      <p className="mt-4 truncate text-lg font-semibold text-white">
        {track?.subtitle}
      </p>
    </button>
  );
};

export default ArtistCard;

interface ArtistCardProps {
  track: Song;
}
