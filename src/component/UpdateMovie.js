import React from "react"

class UpdateMovie extends React.Component{
    constructor(props) {
        super(props);
        const {name, genre, releaseYear, directorName, description, rating} = this.props.movieEach
        this.state = {
            name: name,
            rating: rating,
            genres: genre,
            directorName: directorName,
            releaseYear: releaseYear,
            description: description,
        };  
    }
   
    handleUpdate = (e, id)=>{
        e.preventDefault()
        this.props.setUpdate(this.state, id)
        // Hide the form
        this.props.cancelUpdate()
    }

    render(){
        const {id} = this.props.movieEach
        return(
            
            <form onSubmit = {(e) => this.handleUpdate(e, id)}> 
                <label> Name</label>
                <input type= "text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => {this.setState({name: e.target.value})}}
                ></input>
                <label>Rating</label>
                <input type= "number"
                        name="rating"
                        value={this.state.rating}
                        onChange={(e) => {this.setState({rating: e.target.value})}}

                ></input>            
                <label> Genre</label>
                <input type= "text"
                        name="genres"
                        value={this.state.genres}
                        onChange={(e) => {this.setState({genres: e.target.value})}}

                ></input>
                
                <label> DirectorName </label>
                <input type= "text"
                        name="directorName"
                        value={this.state.directorName}
                        onChange={(e) => {this.setState({directorName: e.target.value})}}
                ></input>
                <label> ReleaseYear </label>
                <input type= "text"
                        name="releaseYear"
                        value={this.state.releaseYear}
                        onChange={(e) => {this.setState({releaseYear: e.target.value})}}
                ></input>
                <label>Description </label>
                <input type= "text"
                        name="description"
                        value={this.state.description}
                        onChange={(e) => {this.setState({description: e.target.value})}}            
                 ></input>
                <button>Apply</button>
            </form>
        )
    }
}
export default UpdateMovie;