import React from 'react';
import SearchBar from './SearchBar';
import Imdb from '../apis/Imdb';
import MovieList from './MovieList';
import Route from './Route';
import SelectedMovie from './SelectedMovie';
class App extends React.Component{
    state={
        movies:[],
        selectedMovie:null
    }
    onSearchTermSubmit=async (term) => {
        const response= await Imdb.get('',{
            params: {query:term}
        })
        this.setState({movies:response.data.results})
        console.log(this.state.movies)
        window.history.pushState({},'','/')
        const newEvent = new PopStateEvent('popstate');
        window.dispatchEvent(newEvent);
    }
    onMovieSelect=(movie)=>{
        this.setState({selectedMovie:movie})
        window.history.pushState({},'','/SelectedMovie')
        const newEvent = new PopStateEvent('popstate');
        window.dispatchEvent(newEvent);
    }
    render(){
        return(
             <div className="ui container" style={{ marginTop: "10px" }}>
                 <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
                 <Route path='/'>
                 <MovieList movies={this.state.movies} onMovieSelect={this.onMovieSelect} />
                 </Route>
                 <Route path='/SelectedMovie'>
                     <SelectedMovie movie={this.state.selectedMovie}/>
                 </Route>
             </div>
        )
            }
}

export default App;