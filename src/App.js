import logo from './logo.svg';
import './App.css';
import React from "react"
import AddMovie from './component/AddMovie'
import MovieList from './component/MovieList'
import AddDetail from './component/AddDetail';

class App extends React.Component {

  state ={
    movieList:[{
      name : "emi",
      rating: 2,
      genres:"romantic",
      isFavorite: true,
      details:{
        directorName:" Baba",
        releaseYear: 2014,
        description: "this is family movie "
      },
      directorName:" Baba",
      
    }],
    isActive: false,
    isMovieDetail: false
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
  handleShow = () => {
    this.setState({
      isActive: true
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false
    });
  };

  render(){
    console.log("hi")
    return ( <>
        <div>
        <MovieList movieList={this.state.movieList} handleChange={this.state.handleChange}></MovieList>
        <AddMovie 
          addMovie= {this.addMovie}
        ></AddMovie>
        <AddDetail handleShow={this.state.handleShow} handleHide={this.state.handleHide}/>
        </div>
           
      </>
    );
  }
  
}

export default App;
