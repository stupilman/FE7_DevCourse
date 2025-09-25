import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
// import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";

export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList movie={"now_playing"} title={"Now Playing"} />
      <MovieList movie={"popular"} title={"Popular"} />
      <MovieList movie={"upcoming"} title={"Upcoming"} />
      {/*<MovieLoader title="Popular" />*/}
    </>
  );
}
