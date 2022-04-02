import React from "react"
import DisplayMovie from "./DisplayMovie"
import AddDetail from "./AddDetail"

class MovieList extends React.Component{
    render(){
             return(
            <div>
                <div>
                    <h1>Movie List</h1>
                </div>
                {this.props.movieList.map((movie, index) =>
                <div>
                    <DisplayMovie  movieEach={movie} index={index} />
                </div>
                )}

            </div>
        )
    }

}

export default MovieList;