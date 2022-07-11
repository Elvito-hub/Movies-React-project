import React from 'react';
import IndivMovie from './IndivMovie';
import styles from '../styles/movielist.css'
const MovieList=({movies,onMovieSelect})=>{
    const renderedList= movies.map((movie)=>{
        return <IndivMovie movie={movie} key={movie.id} onMovieSelect={onMovieSelect} />
    })
    return (
        <div className="moviesSet">
            {renderedList}
        </div>
    )
}
export default MovieList;