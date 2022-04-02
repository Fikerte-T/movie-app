import React from "react"

class AddMovie extends React.Component{
    state = {
        name:"",
        rating: "",
        genres:"",
        details:{
            directorName:"",
            releaseYear: "",
            description: ""
        },
       
    }
    addMovie=()=>{
        this.props.addMovie(this.state.name, this.state.rating, this.state.genres, 
        
            this.state.directorName) //this.state.details.releaseYear,
            // this.state.details.description )
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
            <>
            <button onClick= {this.addMovie}> <h3>AddMovie</h3></button>
            <div>
                 
                <label> Name</label>
                <input type= "text"
                        name="name"
                        value={this.state.name}
                        onChange={(event)=>this.handleChangeName(event)}
                ></input>
                <input type= "number"
                        name="rating"
                        value={this.state.rating}
                        onChange={(event)=>this.handleChangeRating(event)}
                ></input>
            </div>
            <div>
            
                <label> Genres</label>
                <input type= "text"
                        name="genres"
                        value={this.state.genres}
                        onChange={(event)=>this.handleChangeGenres(event)}
                ></input>
                
                <label> DirectorName </label>
                <input type= "text"
                        name="directorName"
                        value={this.state.directorName}
                        onChange={(event)=>this.handleChangeDirectorName(event)}
                ></input>
                <label> ReleaseYear </label>
                <input type= "text"
                        name="releaseYear"
                        value={this.state.releaseYear}
                        onChange={(event)=>this.handleChangeReleaseYear(event)}
                ></input>
                <label>Description </label>
                <input type= "text"
                        name="releaseYear"
                        value={this.state.Description}
                        onChange={(event)=>this.handleChangeDescription(event)}
                ></input>
                
            </div>
            </>
        )
    }
}
export default AddMovie;