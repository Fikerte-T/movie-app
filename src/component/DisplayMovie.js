import React from "react"
import MovieDetail from './MovieDetail'
import AddDetail from './AddDetail'

class DisplayMovie extends React.Component{

render(){
   
    const btnS= this.props.isMovieDetail
    return(
        <>
        <div>
            <h1>Movie List</h1>
        </div>
        <div>
            <p> 
                <b> MovieName : {this.props.movieEach.name} , 
                </b>
                <b>  MovieRating: {this.props.movieEach.rating} , </b>
                <b>  MovieGenres: {this.props.movieEach.genres} </b>
                <b> {this.props.movieEach.index}</b> 
            </p>
           {/* <div>
                < AddDetail />
                        {/* <h3> Movie detail</h3>
                        <p> <b> MovieName : {this.props.movieEach.name} </b> </p>
                        <p> <b> MovieName : {this.props.movieEach.name} </b> </p>
                        <p> <b> MovieName : {this.props.movieEach.name} </b> </p>
                 */}
                {/* < AddDetail />
           </div> */} 
           <AddDetail/>
            <MovieDetail  handleChange={this.props.handleChange}/>
             { btnS && (<div>
                
                    <p>
                        <b> {this.props.movieEach.directorName }</b>
                    </p>
                </div>) }
           
        </div>
    </>
    )
}

}

export default DisplayMovie;