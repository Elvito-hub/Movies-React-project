import React from 'react';
import styles from '../styles/indivmovie.css';

const IndivMovie =({movie,onMovieSelect})=>{
    return (
        <div className="moviebox" onClick={(e)=>{
            e.preventDefault()
            onMovieSelect(movie)
        }
            }>
            <img className="pic" style={{width:'100%',height:'400px',cursor:'pointer'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            <div className="movieinfo">
                <h4 className="title">{movie.original_title}</h4>
                <p className="year">{movie.release_date}</p>
            </div>
        </div>
    )
}

export default IndivMovie;