import React from "react";

const MovieCard =({movie})=>{
    return(
<div className='movie'>
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.consolePoster!=='N/A'? movie.Poster: 'https://via.placeholder.com/400'}></img>
          </div>
          <div>
            <spam>
              {movie.Type}
              <h3>{movie.Title}</h3>
            </spam>
          </div>

        </div>
    )
}
export default MovieCard;