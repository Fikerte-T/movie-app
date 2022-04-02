import logo from './logo.svg';
import './App.css';
import React from "react"
import AddMovie from './component/AddMovie'
import MovieList from './component/MovieList'
import AddDetail from './component/AddDetail';
import FavoriteMovie from './component/FavoriteMovie'

class App extends React.Component {

  state ={
    movieList: []
     }

  addMovie =( name,rating, genres, directorName, isFavorite = false)=>{
    const newmovieList=[...this.state.movieList]
    const item ={name, rating, genres, directorName, isFavorite }
    newmovieList.push(item)
    this.setState({movieList: newmovieList})

  }
  handleChange = () =>{
    this.setState({isMovieDetail: !this.state.isMovieDetail})
  }
  handleFavorite = (name) => {
    this.setState((prevState) => ({
      movieList: prevState.movieList.map((movie) => {
        if (movie.name === name) {
          return {
            ...movie,
            isFavorite: !movie.isFavorite,
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
         addFavorite = {this.handleFavorite}
        />
        <AddMovie movieList={this.state.movieList} 
          addMovie = {this.addMovie}
        />    
        <FavoriteMovie movieList={this.state.movieList}
        
        />
        </div>
           
      </>
    );
  }
  
}

export default App;
