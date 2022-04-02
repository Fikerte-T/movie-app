import React from "react"
import DisplayMovie from "./DisplayMovie"

class MovieList extends React.Component{
    render(){
        console.log("hi")
        return(
            <div>
                {this.props.movieList.map((movie, index) =>
                    <DisplayMovie  movieEach={movie} index={index}
                    handleChange={this.props.handleChange} />
                )}
            </div>
        )
    }

}

export default MovieList;