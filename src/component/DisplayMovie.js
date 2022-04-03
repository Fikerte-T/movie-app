import React from "react"

class DisplayMovie extends React.Component{
    state = {
        isViewMode: true
      };
    
      handleShow = () => {
        this.setState({
          isViewMode: false
        });
      };
    
      handleHide = () => {
        this.setState({
          isViewMode: true
        });
      };
render(){
   const viewMode = {}
   if(this.state.isViewMode) {
       viewMode.display = 'none'
   }
   const {id, name, genre, releaseYear, directorName, description, rating} = this.props.movieEach
    return(
        <>
        <div>
            <p className="movie-name">{name}</p>
            <span>{releaseYear}</span>
            <span>{genre}</span>
            <p style = {viewMode}>DirectorName <span>{directorName}</span></p>
            <p style = {viewMode}>Rating <span>{rating}</span></p>
            <p style = {viewMode}>{description}</p>
        </div>
        <div>
            {this.state.isViewMode ? <button onClick = {this.handleShow}>Detail</button> : <button onClick={this.handleHide}>Hide</button> }
            <button onClick = {() => {this.props.addFavorite(id)}}>Favorite</button>
        </div>
    </>
    )
}

}

export default DisplayMovie;