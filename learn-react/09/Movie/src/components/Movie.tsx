import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";

export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList title={"Now Playing"} category={"now_playing"} />
      <MovieList title={"Upcoming"} category={"upcoming"} />
      <MovieList title={"Popular"} category={"popular"} />
    </>
  );
}
