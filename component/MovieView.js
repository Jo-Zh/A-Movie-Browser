import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=76748b69ff6dbc6105a40c0721341b0f&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data);
        setIsLoading(false);
      });
  }, [id]);

  const loadingMovies = () => {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetail) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;
      return (
        <>
          <Hero text={movieDetail.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                {movieDetail.poster_path ? (
                  <img
                    src={posterPath}
                    alt="movie poster"
                    className="img-fluid shadow rounded"
                  />
                ) : (
                  <p>"movie poster..."</p>
                )}
              </div>
              <div className="col-md-9">
                <h2>{movieDetail.original_title}</h2>
                <p className="lead">{movieDetail.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return loadingMovies();
};

export default MovieView;
