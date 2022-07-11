import React from 'react';
import styles from '../styles/selectedmovie.css';

const SelectedMovie=({movie})=>{
    const onBackSelect=()=>{
        window.history.pushState({},'','/')
        const newEvent = new PopStateEvent('popstate');
        window.dispatchEvent(newEvent);
    }
    return (
        <div className="selectedMovie">
            <img className="pic" style={{width:'350px',height:'500px'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <div className="movieinfos">
                <h1 className="title">{movie.title}</h1>
                <h3 class="plot">{movie.overview}</h3>
                <h3 className="date">{movie.release_date}</h3>
                <button class="ui primary basic button" onClick={(e)=>onBackSelect()}>Back To Movies</button>
            </div>

        </div>
    )
}

export default SelectedMovie;