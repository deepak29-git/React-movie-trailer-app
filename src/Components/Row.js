import { useEffect, useState } from "react";
import axios from "../Components/axios";
import "../Components/Row.css";
import Youtube from "react-youtube";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import movieTrailer from "movie-trailer";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7,
  },

  minTablet: {
    breakpoint: { max: 1252, min: 1024 },
    items: 5,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 483 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 483, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ fetchUrl, title, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function apiCall() {
      let response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    apiCall();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function clickHandler(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title)
        .then((url) => {
          const getVideoId = url.split("").slice(32).join("");
          setTrailerUrl(getVideoId);
        })
        .catch((error) => {
          alert(error.name);
        });
    }
  }

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <Carousel className="row_container" responsive={responsive}>
        {movies.map((movie) => (
          <img
            onClick={() => clickHandler(movie)}
            className={`row_poster ${isLargerRow && `row_poster_larger`}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargerRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </Carousel>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
