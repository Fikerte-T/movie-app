import React from "react"
import DisplayMovie from "./DisplayMovie"

class MovieList extends React.Component{
    render(){
        if(this.props.movieList.length <=0) {
            return (
                <div>
                    <h1>Movie List</h1>
                    <h3>No movies in the list</h3>
                </div>
            )
        } else {
            return(
                <div>
                    <div>
                        <h1>Movie List</h1>
                    </div>
                    {this.props.movieList.map((movie, index) =>
                    <div>
                        <DisplayMovie  movieEach={movie} index={index}
                        addFavorite = {this.props.addFavorite}
                        deleteMovie = {this.props.deleteMovie}
                        setUpdate = {this.props.setUpdate}
                        />
                    </div>
                    )}
                </div>
            )
        }
            
    }

}

export default MovieList;