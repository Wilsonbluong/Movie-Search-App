import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const SingleMovie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="single-movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="move-info">
        <h4>{title}</h4>
        {/* <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span> */}
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
        <p className={`tag ${setVoteClass(vote_average)}`}>
          Rating: {vote_average}
        </p>
      </div>
    </div>
  );
};

export default SingleMovie;
