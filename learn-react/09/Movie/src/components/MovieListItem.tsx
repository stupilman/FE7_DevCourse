import { star } from "../assets/movies/assets";

export default function MovieListItem({
  posterPath,
  title,
  voteAvg,
  releaseDate,
}: {
  posterPath: string;
  title: string;
  voteAvg: number;
  releaseDate: string;
}) {
  const avg = Number(voteAvg).toFixed(1);
  const parts = releaseDate.split("-");
  const formattedDate = `${parseInt(parts[1])}.${parseInt(parts[2])}`
  return (
    <>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="" className="rounded-md w-full" />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="line-clamp-1">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={star}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{avg}</span>
          </div>
          <span className="text-yellow-500 font-bold">{formattedDate}</span>
        </div>
      </div>
    </>
  );
}
