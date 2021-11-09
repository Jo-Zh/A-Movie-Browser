import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const NotFound = "content not found!";
  const postUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2">
      <div className="card">
        {movie.poster_path ? (
          <img
            src={postUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
        ) : (
          <h1>{NotFound}</h1>
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyWords, searchResults, dataFound }) => {
  const title = `you are searching for ${keyWords}`;
  const searchList = searchResults.map((item, i) => {
    return <MovieCard key={i} movie={item} />;
  });
  const showData = () => {
    if (dataFound) {
      return (
        <>
          <Hero text={title} />
          <div className="container">
            <div className="row">{searchList}</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Hero text="Pages not Found, error 404!" />
          <div className="container">
            <h2 className="row">No Results!</h2>
          </div>
        </>
      );
    }
  };

  return showData();
};

export default SearchView;
