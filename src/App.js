import logo from './logo.svg';
import './App.css';
import React from "react"
import AddMovie from './component/AddMovie'
import MovieList from './component/MovieList'
import AddDetail from './component/AddDetail';

class App extends React.Component {

  state ={
    movieList: []
     }

  addMovie =( name,rating, genres, directorName)=>{
    const newmovieList=[...this.state.movieList]
    const item ={name, rating, genres, directorName }
    newmovieList.push(item)
    this.setState({movieList: newmovieList})

  }
  handleChange = () =>{
    this.setState({isMovieDetail: !this.state.isMovieDetail})
  }
 
  render(){
    console.log("hi")
    return ( 
    <>
        <div>
        <MovieList movieList={this.state.movieList} />
        <AddMovie movieList={this.state.movieList} 
          addMovie = {this.addMovie}
        />    
        </div>
           
      </>
    );
  }
  
}

export default App;
