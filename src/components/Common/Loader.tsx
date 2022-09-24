import { loader } from "@assets/index";

const Loader = ({ title }: LoaderProps) => {
  console.log("your gay");

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img src={loader} alt="loader" className="h-32 w-32 object-contain" />
      <h1 className="mt-2 text-2xl font-bold text-white">
        {title || "Loading"}
      </h1>
    </div>
  );
};

export default Loader;

interface LoaderProps {
  title: string;
}
