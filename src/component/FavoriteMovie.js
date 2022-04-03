import React from "react"

class FavoriteMovie extends React.Component{

render(){
    console.log(this.props.movieList)
    if((this.props.movieList.length) <= 0) {
        return(
            <>
            <h1>Favorite Movies</h1>
            <p>No favorite movies</p>
            </>
        )
    }else {
        return(
            <>
                <h1>Favorite Movies</h1>
                {this.props.movieList.map((movie) =>
                    {
                        if(movie.isFavorite) {
                            return (
                            <>
                            <p>{movie.name}</p>
                            <button onClick = {() => this.props.removeFromFavorite(movie.id)}>Remove</button>
                            </>
                            );
                        }
                    }
                
                )}
            </>
        )
    }

   
}

}

export default FavoriteMovie;