import './App.css';
import React from "react"
import AddMovie from './component/AddMovie'
import MovieList from './component/MovieList'
import FavoriteMovie from './component/FavoriteMovie'
import { v4 as uuid4 } from 'uuid';


class App extends React.Component {

  state ={
    movieList: []
     }

  addMovie = (name, rating, genres, directorName, releaseYear, description)=>{
    const newMovie = {
      id: uuid4(),
      name: name,
      rating: rating,
      genre: genres,
      directorName: directorName,
      releaseYear: releaseYear,
      description: description,
      isFavorite: false
    }
    
    this.setState({
      movieList: [...this.state.movieList, newMovie], 
    })

  }
  
  addToFavorite = (id) => {
    this.setState((prevState) => ({
      movieList: prevState.movieList.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            isFavorite: true,
          };
        }
        return movie;
      }),
    }));
  }

  removeFromFavorite = (id) => {
    this.setState((prevState) => ({
      movieList: prevState.movieList.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            isFavorite: false,
          };
        }
        return movie;
      }),
    }));
  }

 
  render(){
    return ( 
    <>
        <div>
        <MovieList movieList={this.state.movieList}
         addFavorite = {this.addToFavorite}
        />
        <AddMovie movieList={this.state.movieList} 
          addMovie = {this.addMovie}
        />    
        <FavoriteMovie movieList={this.state.movieList}
         removeFromFavorite = {this.removeFromFavorite}
        
        />
        </div>
           
      </>
    );
  }
  
}

export default App;
