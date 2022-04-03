import React from "react"

class AddMovie extends React.Component{
    state = {
        name:"",
        rating: "",
        genres:"",
        directorName:"",
        releaseYear: "",
        description: "",       
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addMovie(this.state.name, this.state.rating, this.state.genres, this.state.directorName, this.state.releaseYear, this.state.description)
        //clear the input fields after adding the movie
        this.setState({
            name:"",
            rating: "",
            genres:"",
            directorName:"",
            releaseYear: "",
            description: "",       
            });
    }
    handleChangeName= (event)=>{
     this.setState({name: event.target.value})
    }
    handleChangeGenres= (event)=>{
        this.setState({genres: event.target.value})
       }
    handleChangeRating= (event)=>{
    this.setState({rating: event.target.value})
    }
    handleChangeisFavorite= (event)=>{
        this.setState({isFavorite: event.target.value})
       }
    handleChangeDirectorName= (event)=>{
    this.setState({directorName: event.target.value})
    }
    handleChangeReleaseYear= (event)=>{
        this.setState({releaseYear: event.target.value})
        }
    handleChangeDescription= (event)=>{
            this.setState({description: event.target.value})
           
     }
    
    render(){
        return(
            <form onSubmit = {this.handleSubmit}> 
                <label> Name</label>
                <input type= "text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                ></input>
                <label>Rating</label>
                <input type= "number"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleChangeRating}
                ></input>            
                <label> Genre</label>
                <input type= "text"
                        name="genres"
                        value={this.state.genres}
                        onChange={this.handleChangeGenres}
                ></input>
                
                <label> DirectorName </label>
                <input type= "text"
                        name="directorName"
                        value={this.state.directorName}
                        onChange={this.handleChangeDirectorName}
                ></input>
                <label> ReleaseYear </label>
                <input type= "text"
                        name="releaseYear"
                        value={this.state.releaseYear}
                        onChange={this.handleChangeReleaseYear}
                ></input>
                <label>Description </label>
                <input type= "text"
                        name="releaseYear"
                        value={this.state.description}
                        onChange={this.handleChangeDescription}            
                 ></input>
            <button>AddMovie</button>
            </form>
        )
    }
}
export default AddMovie;