import MovieLoaderCard from "./MovieCardLoader";
import MovieListItem from "./MovieListItem";
import useFetch from "../hooks/useFetch.ts";
import MovieError from "./MovieError.tsx";

export default function MovieList({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const { data, isLoading, error } = useFetch<MovieType[]>(category);

  if (error)
    return <MovieError title={error}/>
  return (
    <>
      <article className="bg-black px-4 pt-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}

            {isLoading
              ? Array.from({ length: 20 }, (_, idx) => (
                  <MovieLoaderCard key={idx} />
                ))
              : data.map((d) => (
                  <MovieListItem
                    key={d.id}
                    posterPath={d.poster_path}
                    title={d.title}
                    voteAvg={d.vote_average}
                    releaseDate={d.release_date}
                  />
                ))}
          </div>
        </section>
      </article>
    </>
  );
}
