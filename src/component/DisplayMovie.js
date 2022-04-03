import React from "react"
import UpdateMovie from "./UpdateMovie";

class DisplayMovie extends React.Component{
    state = {
        isViewMode: true,
        isUpdateMode : true
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

      handleUpdate = () => {
        this.setState({
            isUpdateMode: false
        })
      }
      cancelUpdate = () => {
          this.setState({
              isUpdateMode: true
          })
      }

render(){
   const viewMode = {}
   const updateMode = {}
   if(this.state.isViewMode) {
       viewMode.display = 'none'
   }
   if(this.state.isUpdateMode) {
       updateMode.display = 'none'
   }
   const {id, name, genre, releaseYear, directorName, description, rating} = this.props.movieEach
    return(
        <>
        <div>
            <div>
                <p className="movie-name">{name}</p>
                <span>{releaseYear}</span>
                <span>{genre}</span>
                <p style = {viewMode}>DirectorName <span>{directorName}</span></p>
                <p style = {viewMode}>Rating <span>{rating}</span></p>
                <p style = {viewMode}>{description}</p>
            </div>
            <div style = {updateMode}>
                <UpdateMovie movieEach = {this.props.movieEach} 
                cancelUpdate = {this.cancelUpdate}
                setUpdate = {this.props.setUpdate}
                />
            </div>
        </div>
        <div>
            {this.state.isViewMode ? <button onClick = {this.handleShow}>Detail</button> : <button onClick={this.handleHide}>Hide</button> }
            <button onClick = {() => {this.props.addFavorite(id)}}>Favorite</button>
            <button onClick = {() => {this.props.deleteMovie(id)}}>Delete</button>
            {this.state.isUpdateMode ? <button onClick = {this.handleUpdate}>Update</button> : <button onClick={this.cancelUpdate}>Cancel</button>}


        </div>
    </>
    )
}

}

export default DisplayMovie;