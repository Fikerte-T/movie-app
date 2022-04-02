import React from "react"
import MovieDetail from './MovieDetail'
import AddDetail from './AddDetail'

class DisplayMovie extends React.Component{

render(){
   console.log(this.props.movieEach)
    const btnS= this.props.isMovieDetail
    return(
        <>
      
        <div>
            <p> 
                <b> MovieName : {this.props.movieEach.name} , 
                </b>
                <b>  MovieRating: {this.props.movieEach.rating} , </b>
                <b>  MovieGenres: {this.props.movieEach.genres} </b>
                <b> {this.props.movieEach.index}</b> 
            </p>
            <AddDetail movieEach={this.props.movieEach} />
            <button onClick = {() => {this.props.addFavorite(this.props.movieEach.name)}}>Favorite</button>
        </div>
    </>
    )
}

}

export default DisplayMovie;